import React , { useState , useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../Header';
import Alarm from '../../img/Alarm.mp3';

const CountDownTimer = ({hoursMinSecs}) => {

    const { t, i18n } = useTranslation();
   
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    const [start , setStart] = useState(false);
    let [text , setText] = useState('開始');

    useEffect(() => {
        var bt_text = document.getElementById('btn_start').textContent ;
        if(bt_text ==='開始' || bt_text ==='Start' || bt_text ==='スタート'){
            setText(t('btn.start'));
        }else if(bt_text ==='繼續' || bt_text ==='Continue' || bt_text ==='スタート'){
            setText(t('btn.continue'));
        }else{
            setText(t('btn.start'));
        }
        // if()
    })

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0){
            setStart(false);
            toggle(true);
            document.getElementById('modal1').click();
            reset();
        } 
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    useEffect(() => {
        if(start !== false){
            const timerId = setInterval(() => tick(), 1000);
            return () => clearInterval(timerId);
        }

    });

    function startCountDown(){
        if(start === false){
            setStart(true);
        }else{
            setText(t('btn.continue'));
            setStart(false);
        }
    }

    function resetCoutDown(){
        setText(t('btn.start'));
        setStart(false);
        setTime([hours, minutes, seconds]);
    }

    const useAudio = () => {
        const [audio] = useState(new Audio(Alarm));
        const [playing, setPlaying] = useState(false);
      
        const toggle = () => setPlaying(!playing);
      
        useEffect(() => {
            playing ? audio.play() : audio.pause();
            
          },
          [playing]
        );
      
        useEffect(() => {
          audio.addEventListener('ended', () => setPlaying(false));
          return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
          };
        }, []);
    
        return [playing, toggle];
        };
    
    const [playing, toggle] = useAudio(Alarm);

    return (
        <div>
            <Header></Header>
            <div className="container-fluid" style={{'marginTop':'70px'}}>
                <div className="row justify-content-center text-center">
                    <div>
                        <h1 style={{fontSize:'30vw'}} className="timer-style">{`${mins
                            .toString()
                            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}
                        </h1> 
                    </div>

                    {/* <h1 className="text-white" style={{fontSize:'160px'}}>{`${hrs.toString().padStart(2, '0')}:${mins
                    .toString()
                    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</h1>  */}
                    <div className="col">
                        <button id="btn_start" className="btn btn-success btn-lg" style={{marginRight:'20px'}} onClick={ startCountDown} >{start?t('btn.pause'):text}</button>
                        <button className="btn btn-danger btn-lg" onClick={ resetCoutDown} >{t('btn.reset')}</button>

                    </div>
                </div>
            

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{t('timer_title')}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">{t('btn.close')}</button>
                        </div>
                        </div>
                    </div>
                </div>
                <button id="modal1" type="button" style={{visibility:'hidden'}} data-bs-toggle="modal" data-bs-target="#staticBackdrop"></button>

            </div>
        </div>
        

    );
}

export default CountDownTimer;