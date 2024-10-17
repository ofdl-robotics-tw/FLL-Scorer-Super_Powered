import React , { useState , useEffect } from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { useTranslation } from 'react-i18next'
import './App.css'
import './index.css';
import Header from './components/Header'
import M00 from './img/M00.png'
import M01 from './img/M01.png'
import M02 from './img/M02.png'
import M03 from './img/M03.png'
import M04 from './img/M04.png'
import M05 from './img/M05.png'
import M06 from './img/M06.png'
import M07 from './img/M07.png'
import M08 from './img/M08.png'
import M09 from './img/M09.png'
import M10 from './img/M10.png'
import M11 from './img/M11.png'
import M12 from './img/M12.png'
import M13 from './img/M13.png'
import M14 from './img/M14.png'
import M15 from './img/M15.png'
import M16 from './img/M16.png'
import Logo from './img/logo.png'



function App() {
    const { t, i18n } = useTranslation();

    const pStyle = {
        marginTop:'10px',
        marginBottom: '8px',
        fontSize: '14px'
    }

    useEffect(() => {
        document.getElementById('M00').getElementsByClassName('switch-on')[0].innerHTML = t('btn.yes');
        document.getElementById('M00').getElementsByClassName('switch-off')[0].innerHTML = t('btn.no');
        document.getElementById('M01').getElementsByClassName('switch-on')[0].innerHTML = t('btn.yes');
        document.getElementById('M01').getElementsByClassName('switch-off')[0].innerHTML = t('btn.no');
        document.getElementById('M03_2').getElementsByClassName('switch-on')[0].innerHTML = t('btn.yes');
        document.getElementById('M03_2').getElementsByClassName('switch-off')[0].innerHTML = t('btn.no');
        document.getElementById('M05_1').getElementsByClassName('switch-on')[0].innerHTML = t('btn.yes');
        document.getElementById('M05_1').getElementsByClassName('switch-off')[0].innerHTML = t('btn.no');
        document.getElementById('M05_2').getElementsByClassName('switch-on')[0].innerHTML = t('btn.yes');
        document.getElementById('M05_2').getElementsByClassName('switch-off')[0].innerHTML = t('btn.no');
        document.getElementById('M06_1').getElementsByClassName('switch-on')[0].innerHTML = t('btn.yes');
        document.getElementById('M06_1').getElementsByClassName('switch-off')[0].innerHTML = t('btn.no');
        document.getElementById('M06_2').getElementsByClassName('switch-on')[0].innerHTML = t('btn.yes');
        document.getElementById('M06_2').getElementsByClassName('switch-off')[0].innerHTML = t('btn.no');
        document.getElementById('M08_1').getElementsByClassName('switch-on')[0].innerHTML = t('btn.yes');
        document.getElementById('M08_1').getElementsByClassName('switch-off')[0].innerHTML = t('btn.no');
        document.getElementById('M08_2').getElementsByClassName('switch-on')[0].innerHTML = t('btn.yes');
        document.getElementById('M08_2').getElementsByClassName('switch-off')[0].innerHTML = t('btn.no');
        document.getElementById('M09_1').getElementsByClassName('switch-on')[0].innerHTML = t('btn.yes');
        document.getElementById('M09_1').getElementsByClassName('switch-off')[0].innerHTML = t('btn.no');
        document.getElementById('M11').getElementsByClassName('switch-on')[0].innerHTML = t('btn.yes');
        document.getElementById('M11').getElementsByClassName('switch-off')[0].innerHTML = t('btn.no');
        document.getElementById('M14_2').getElementsByClassName('switch-on')[0].innerHTML = t('btn.yes');
        document.getElementById('M14_2').getElementsByClassName('switch-off')[0].innerHTML = t('btn.no');
        // document.getElementById('M13_1').getElementsByClassName('switch-on')[0].innerHTML = <Success/>;
        // document.getElementById('M13_1').getElementsByClassName('switch-off')[0].innerHTML = <Fail/>;
        // document.getElementById('M13_2').getElementsByClassName('switch-on')[0].innerHTML = <Success/>;
        // document.getElementById('M13_2').getElementsByClassName('switch-off')[0].innerHTML = <Fail/>;
    
    },[])
    
    let [TotalScore, setScore] = useState(0);
    let [var_M00, setM00] = useState(false);
    let [var_M01, setM01] = useState(false);

    let [Score_M02_1, setM02_1] = useState(0);
    let [chk_M02_1, setChkM02_1] = useState('');

    let [var_M02_2, setM02_2] = useState(0);
    let [chk_M02_2, setChkM02_2] = useState('');


    let [Score_M03_1, setM03_1] = useState(0);
    let [chk_M03_1, setChkM03_1] = useState('');
    
    let [var_M03_2, setM03_2] = useState(false);

    let [Score_M04_1, setM04_1] = useState(0);
    
    let [var_M05_1, setM05_1] = useState(false);
    let [var_M05_2, setM05_2] = useState(false);

    let [var_M06_1, setM06_1] = useState(false);
    let [var_M06_2, setM06_2] = useState(false);

    let [Score_M07, setM07] = useState(0);

    //
    let [var_M08_1, setM08_1] = useState(false);
    let [var_M08_2, setM08_2] = useState(false);

    //

    let [var_M09_1, setM09_1] = useState(false);
    let [Score_M09_2, setM09_2] = useState(0);
    let [chk_M09_2, setChkM09_2] = useState('');

    //
    let [Score_M10, setM10] = useState(0);
    //
    let [var_M11, setM11] = useState(false);

    let [count_M12_1, setM12_1] = useState(0);
    let [count_M12_2, setM12_2] = useState(0);

    let [Score_M13, setM13] = useState(0);

    let [Score_M14_1, setM14_1] = useState(0);
    let [var_M14_2, setM14_2] = useState(false);

    let [Score_M15, setM15] = useState(0);

    let [tokens_M16 , setM16] = useState(0);

    let [MGP , setMGP] = useState(0);

    let func_M00 = (e) =>{
        setM00(var_M00=e)
        // let status = document.getElementById('M00').checked
        // console.log(status)
        if(e === true){setScore(TotalScore+=20)}else{setScore(TotalScore-=20)}
        // console.log({TotalScore})    
    }

    let func_M01 = (e) =>{
        setM01(var_M01=e)
        // let status = document.getElementById('M01').checked
        // console.log(status)
        if(e === true){setScore(TotalScore+=10)}else{setScore(TotalScore-=10)}
        // console.log({TotalScore})    
        // console.log(document.getElementsByClassName('switch-on')[0].innerHTML)
    }

    let func_M02_1 = (e) =>{
        if(e.target.value != '0'){
            document.getElementById('btn_M02_21').disabled=false;
            document.getElementById('btn_M02_22').disabled=false;
        }else{
            if(chk_M02_2 === '10'){
                document.getElementById('btn_M02_22').checked=false;
                setChkM02_2(0);
                setM02_2(0);
                setScore(TotalScore-=10);
            }
            document.getElementById('btn_M02_21').disabled=true;
            document.getElementById('btn_M02_22').disabled=true;
        }
        var pre_value = Score_M02_1;
        setScore(TotalScore-=pre_value);
        setChkM02_1(e.target.value);
        setM02_1(Score_M02_1 = parseInt(e.target.value , 10));
        setScore(TotalScore+=Score_M02_1);


    }

    let func_M02_2 = (e) =>{

        var pre_value = var_M02_2;
        setScore(TotalScore-=pre_value);
        setChkM02_2(e.target.value);
        setM02_2(var_M02_2 = parseInt(e.target.value , 10));
        setScore(TotalScore+=var_M02_2);
    }

    let func_M03_1 = (e) =>{
        var pre_value = Score_M03_1;
        setScore(TotalScore-=pre_value);
        setM03_1(Score_M03_1 = parseInt(e.target.value , 10));
        setScore(TotalScore+=Score_M03_1);
    }

    let func_M03_2 = (e) =>{
        setM03_2(var_M03_2=e)
        if(e === true){setScore(TotalScore+=5)}else{setScore(TotalScore-=5)}

    }

    let func_M04_1 = (e) =>{
        var pre_value = Score_M04_1;
        setScore(TotalScore-=pre_value);
        setM04_1(Score_M04_1 = parseInt(e.target.value , 10));
        setScore(TotalScore+=Score_M04_1);
    }

    let func_M05_1 = (e) =>{
        setM05_1(var_M05_1 = e)
        
        if(e === true)
        {
            setScore(TotalScore+=20);
        }else{
            if(var_M05_2){func_M05_2(false);}
            setScore(TotalScore-=20);
        }
    }

    let func_M05_2 = (e) =>{
        if(!var_M05_1 && !var_M05_2){func_M05_1(true);}
        setM05_2(var_M05_2=e);
        if(e === true){setScore(TotalScore+=10);}else{setScore(TotalScore-=10);}
    }

    let func_M06_1 = (e) =>{
        setM06_1(var_M06_1 = e)
        
        if(e === true)
        {
            setScore(TotalScore+=10);
        }else{
            setScore(TotalScore-=10);
        }
    }

    let func_M06_2 = (e) =>{
        setM06_2(var_M06_2=e);
        if(e === true){setScore(TotalScore+=10);}else{setScore(TotalScore-=10);}
    }

    let func_M07 = (e) =>{
        var pre_value = Score_M07;
        setScore(TotalScore-=parseInt(pre_value,10));
        // console.log(TotalScore);
        setM07(Score_M07 = parseInt(e.target.value,10));
        setScore(TotalScore+=Score_M07);
    }

    let func_M08_1 = (e) =>{
        setM08_1(var_M08_1 = e)
        
        if(e === true)
        {
            setScore(TotalScore+=10);
        }else{
            setScore(TotalScore-=10);
        }
    }

    let func_M08_2 = (e) =>{
        setM08_2(var_M08_2=e);
        if(e === true){setScore(TotalScore+=10);}else{setScore(TotalScore-=10);}
    }

    let func_M09_1 = (e) =>{
        setM09_1(var_M09_1 = e)
        
        if(e === true)
        {
            setScore(TotalScore+=10);
        }else{
            setScore(TotalScore-=10);
        }
    }

    let func_M09_2 = (e) =>{
        var pre_value = Score_M09_2;
        setScore(TotalScore-=pre_value);
        setChkM09_2(e.target.value);
        setM09_2(Score_M09_2 = parseInt(e.target.value , 10));
        setScore(TotalScore+=Score_M09_2);
    }
    
    let func_M10 = (e) =>{
        var pre_value = Score_M10;
        setScore(TotalScore-=parseInt(pre_value,10));
        // console.log(TotalScore);
        setM10(Score_M10 = parseInt(e.target.value,10));
        setScore(TotalScore+=Score_M10); 
    }

    let func_M11 = (e) =>{
        setM11(var_M11=e)
        if(e === true){setScore(TotalScore+=20)}else{setScore(TotalScore-=20)}

    }

    let func_M12_1 = (e) =>{
        var temp = 3 ;

        if( temp-(count_M12_2 ) >=e.target.value ){
            if( (temp-count_M12_2)>=e.target.value ){
                var pre_value = count_M12_1;
                setScore(TotalScore= TotalScore - (pre_value*5));
                setM12_1(count_M12_1 = parseInt(e.target.value , 10));
                setScore(TotalScore = TotalScore + (count_M12_1*5));
            }
        }



    }

    let func_M12_2 = (e) =>{
        var temp = 3;
        if( temp-(count_M12_1) >=e.target.value ){
            if( (temp-count_M12_1)>=e.target.value ){
                var pre_value = count_M12_2;
                setScore(TotalScore= TotalScore - (pre_value*10));
                setM12_2(count_M12_2 = parseInt(e.target.value , 10));
                setScore(TotalScore = TotalScore + (count_M12_2*10));
            }
        }

    }

    let func_M13 = (e) =>{
        var pre_value = Score_M13;
        setScore(TotalScore-=parseInt(pre_value,10));
        // console.log(TotalScore);
        setM13(Score_M13 = parseInt(e.target.value,10));
        setScore(TotalScore+=Score_M13); 
    }



    let func_M14_1 = (e) =>{
        var pre_value = Score_M14_1;
        setScore(TotalScore-=parseInt(pre_value,10));
        // console.log(TotalScore);
        setM14_1(Score_M14_1 = parseInt(e.target.value,10));
        setScore(TotalScore+=Score_M14_1); 

    }

    let func_M14_2 = (e) =>{
        setM14_2(var_M14_2=e)
        if(e === true){setScore(TotalScore+=10)}else{setScore(TotalScore-=10)}
    }

    let func_M15 = (e) =>{
        var pre_value = Score_M15;
        setScore(TotalScore-=parseInt(pre_value,10));
        // console.log(TotalScore);
        setM15(Score_M15 = parseInt(e.target.value,10));
        setScore(TotalScore+=Score_M15); 

    }

    let func_M16 = (e) =>{
        var pre_value = tokens_M16;
        setScore(TotalScore-=Tokens_score(pre_value));
        // console.log(TotalScore);
        setM16(tokens_M16 = e.target.value);
        setScore(TotalScore+=Tokens_score(tokens_M16));
    }

    let func_MGP = (e) =>{
        setMGP(MGP = e.target.value);
    }

    let init = (e) =>{


        setM00(false);
        setM01(false);

        setM02_1(0);
        setChkM02_1('');

        setM02_2(0);
        setChkM02_2('');


        setM03_1(0);

        setM03_2(false);

        setM04_1(0);

        setM05_1(false);
        setM05_2(false);

        setM06_1(false);
        setM06_2(false);

        setM07(0);

        //
        setM08_1(false);
        setM08_2(false);

        //

        setM09_1(false);
        setM09_2(0);
        setChkM09_2('');

        //
        setM10(0);
        //
        setM11(false);

        setM12_1(0);
        setM12_2(0);

        setM13(0);

        setM14_1(0);
        setM14_2(false);

        setM15(0);

        setM16(0);
        setMGP(0);
        setScore(0);


        document.getElementById('btn_M02_21').disabled=true;
        document.getElementById('btn_M02_22').disabled=true;

        // document.getElementById('btn_M16_11').disabled=true;
        // document.getElementById('btn_M16_12').disabled=true;
        // document.getElementById('btn_M16_21').disabled=true;
        // document.getElementById('btn_M16_22').disabled=true;
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }
    

    function Tokens_score (tokens_count){
        switch (tokens_count) {
            case '1':
                return 10;
            case '2':
                return 15;
            case '3':
                return 25;
            case '4':
                return 35;
            case '5':
                return 50;
            case '6':
                return 50;
            default:
                return 0;
        }
    }


    return (
        <div>
            <Header></Header>
            <div className="container" style={{'marginTop':'70px'}}>
                <div className="row justify-content-center text-center">
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                        <img src={M00} className="rounded mx-auto d-block" alt="..." width="35%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M00 {t('M00.title')}</h5>
                                <p style={pStyle}>{t('M00.1')}</p>
                                <div id="M00">
                                    <BootstrapSwitchButton
                                        checked={var_M00}
                                        onlabel={t('btn.yes')}
                                        offlabel={t('btn.no')}
                                        onstyle='success'
                                        offstyle='secondary'
                                        width='100'
                                        size='sm'
                                        onChange={ func_M00 }>
                                    </BootstrapSwitchButton>                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                        <img src={M01} className="rounded mx-auto d-block" alt="..." width="50%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M01 {t('M01.title')}</h5>
                                <p style={pStyle}>{t('M01.1')}</p>
                                <div id="M01">
                                    <BootstrapSwitchButton
                                        checked={var_M01}
                                        onlabel={t('btn.yes')}
                                        offlabel={t('btn.no')}
                                        onstyle='success'
                                        offstyle='secondary'
                                        width='100'
                                        size='sm'
                                        onChange={ func_M01 }>
                                    </BootstrapSwitchButton>
                                </div> 
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                        <img src={M02} className="rounded mx-auto d-block" alt="..." width="45%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M02 {t('M02.title')}</h5>
                                <p style={pStyle}>{t('M02.1')}</p>
                                <div id="M02_1">
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                            <select onChange={func_M02_1}  className="form-select form-select-sm" aria-label="size 3 select example" value={chk_M02_1}>
                                                <option value="0">0</option>
                                                <option value="5">1</option>
                                                <option value="10">2</option>
                                                <option value="15">3</option>
                                            </select>
                                        </div>
                                    </div>    
                                </div>
                                <p style={pStyle}>{t('M02.2')}</p>
                                <div id="M02_2">
                                    <div className="btn-group btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input value="0" onChange={func_M02_2} type="radio" className="btn-check" name="btn_M02_2" id="btn_M02_21" checked={ chk_M02_2 ==='0'} disabled autoComplete="off"></input>
                                        <label className="btn btn-outline-success" htmlFor="btn_M02_21">{t('btn.no')}</label>

                                        <input value="10" onChange={func_M02_2} type="radio" className="btn-check" name="btn_M02_2" id="btn_M02_22" checked={ chk_M02_2 ==='10'} disabled autoComplete="off"></input>
                                        <label className="btn btn-outline-success" htmlFor="btn_M02_22">{t('btn.yes')}</label>

                                    </div>     
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                        <img src={M03} className="rounded mx-auto d-block" alt="..." width="45%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M03 {t('M03.title')}</h5>
                                <p style={pStyle}>{t('M03.1')}</p>
                                <div id="M03_1">
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                            <select onChange={func_M03_1}  className="form-select form-select-sm" aria-label="size 3 select example" value={Score_M03_1}>
                                                <option value="0">0</option>
                                                <option value="10">1</option>
                                                <option value="20">2</option>
                                                <option value="30">3+</option>
                                            </select>
                                        </div>
                                    </div>    
                                </div>                  
                                <p style={pStyle}>{t('M03.2')}</p>
                                <div id="M03_2">
                                <BootstrapSwitchButton
                                    checked={var_M03_2}
                                    onlabel={t('btn.yes')}
                                    offlabel={t('btn.no')}
                                    onstyle='success'
                                    offstyle='secondary'
                                    width='100'
                                    size='sm'
                                    onChange={ func_M03_2 }>
                                </BootstrapSwitchButton> 
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                        <img src={M04} className="rounded mx-auto d-block" alt="..." width="55%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M04 {t('M04.title')}</h5>
                                <p style={pStyle}>{t('M04.1')}</p>
                                <div id="M04_1">
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                            <select onChange={func_M04_1}  className="form-select form-select-sm" aria-label="size 3 select example" value={Score_M04_1}>
                                                <option value="0">0</option>
                                                <option value="5">1</option>
                                                <option value="10">2</option>
                                                <option value="20">3</option>
                                            </select>
                                        </div>
                                    </div>  
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                        <img src={M05} className="rounded mx-auto d-block" alt="..." width="30%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M05 {t('M05.title')}</h5>
                                <p style={pStyle}>{t('M05.1')}</p>
                                <div id="M05_1">
                                <BootstrapSwitchButton
                                    checked={var_M05_1}
                                    onlabel={t('btn.yes')}
                                    offlabel={t('btn.no')}
                                    onstyle='success'
                                    offstyle='secondary'
                                    width='100'
                                    size='sm'
                                    onChange={ func_M05_1 }>
                                </BootstrapSwitchButton>
                                </div>
                                <p style={pStyle}>{t('M05.2')}</p>
                                <div id="M05_2">
                                <BootstrapSwitchButton
                                    checked={var_M05_2}
                                    onlabel={t('btn.yes')}
                                    offlabel={t('btn.no')}
                                    onstyle='success'
                                    offstyle='secondary'
                                    width='100'
                                    size='sm'
                                    onChange={ func_M05_2 }>
                                </BootstrapSwitchButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                        <img src={M06} className="rounded mx-auto d-block" alt="..." width="45%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M06 {t('M06.title')}</h5>
                                <p style={pStyle}>{t('M06.1')}</p>
                                <div id="M06_1">
                                <BootstrapSwitchButton
                                    checked={var_M06_1}
                                    onlabel={t('btn.yes')}
                                    offlabel={t('btn.no')}
                                    onstyle='success'
                                    offstyle='secondary'
                                    width='100'
                                    size='sm'
                                    onChange={ func_M06_1 }>
                                </BootstrapSwitchButton>
                                </div>
                                <p style={pStyle}>{t('M06.2')}</p>
                                <div id="M06_2">
                                <BootstrapSwitchButton
                                    checked={var_M06_2}
                                    onlabel={t('btn.yes')}
                                    offlabel={t('btn.no')}
                                    onstyle='success'
                                    offstyle='secondary'
                                    width='100'
                                    size='sm'
                                    onChange={ func_M06_2 }>
                                </BootstrapSwitchButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                            <img src={M07} className="rounded mx-auto d-block" alt="..." width="25%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M07 {t('M07.title')}</h5>
                                <p style={pStyle}>{t('M07.1')}</p>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <select onChange={func_M07}  className="form-select form-select-sm" aria-label="size 3 select example" value={Score_M07}>
                                            <option value="0">0</option>
                                            <option value="10">1</option>
                                            <option value="20">2</option>
                                            <option value="30">3</option>
                                        </select>
                                    </div>
                                </div>     
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                            <img src={M08} className="rounded mx-auto d-block" alt="..." width="45%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M08 {t('M08.title')}</h5>
                                <p style={pStyle}>{t('M08.1')}</p>
                                <div id="M08_1">
                                <BootstrapSwitchButton
                                    checked={var_M08_1}
                                    onlabel={t('btn.yes')}
                                    offlabel={t('btn.no')}
                                    onstyle='success'
                                    offstyle='secondary'
                                    width='100'
                                    size='sm'
                                    onChange={ func_M08_1 }>
                                </BootstrapSwitchButton>
                                </div>
                                <p style={pStyle}>{t('M08.2')}</p>
                                <div id="M08_2">
                                <BootstrapSwitchButton
                                    checked={var_M08_2}
                                    onlabel={t('btn.yes')}
                                    offlabel={t('btn.no')}
                                    onstyle='success'
                                    offstyle='secondary'
                                    width='100'
                                    size='sm'
                                    onChange={ func_M08_2 }>
                                </BootstrapSwitchButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                            <img src={M09} className="rounded mx-auto d-block" alt="..." width="40%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M09 {t('M09.title')}</h5>
                                <p style={pStyle}>{t('M09.1')}</p>
                                <div id="M09_1">
                                <BootstrapSwitchButton
                                    checked={var_M09_1}
                                    onlabel={t('btn.yes')}
                                    offlabel={t('btn.no')}
                                    onstyle='success'
                                    offstyle='secondary'
                                    width='100'
                                    size='sm'
                                    onChange={ func_M09_1 }>
                                </BootstrapSwitchButton>
                                </div>
                                <p style={pStyle}>{t('M09.2')}</p>
                                <div id="M09_2">
                                <div className="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
                                    <input value="0" onChange={func_M09_2} type="radio" className="btn-check" name="btn_M09_1" id="btn_M09_1" checked={ chk_M09_2 ==='0'} autoComplete="off"></input>
                                    <label className="btn btn-outline-success" htmlFor="btn_M09_1">{t('M09.ans1')}</label>

                                    <input value="10" onChange={func_M09_2} type="radio" className="btn-check" name="btn_M09_1" id="btn_M09_2" checked={ chk_M09_2 ==='10'}  autoComplete="off"></input>
                                    <label className="btn btn-outline-success" htmlFor="btn_M09_2">{t('M09.ans2')}</label>

                                    <input value="20" onChange={func_M09_2} type="radio" className="btn-check" name="btn_M09_1" id="btn_M09_3" checked={ chk_M09_2 ==='20'} autoComplete="off"></input>
                                    <label className="btn btn-outline-success" htmlFor="btn_M09_3">{t('M09.ans3')}</label>
                                    
                                </div>        
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                            <img src={M10} className="rounded mx-auto d-block" alt="..." width="42%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M10 {t('M10.title')}</h5>
                                <p style={pStyle}>{t('M10.1')}</p>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <select onChange={func_M10}  className="form-select form-select-sm" aria-label="size 3 select example" value={Score_M10}>
                                            <option value="0">0</option>
                                            <option value="5">1</option>
                                            <option value="10">2</option>
                                            <option value="25">3</option>
                                        </select>
                                    </div>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                            <img src={M11} className="rounded mx-auto d-block" alt="..." width="32%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M11 {t('M11.title')}</h5>
                                <p>{t('M11.1')}</p>
                                <div id="M11">
                                <BootstrapSwitchButton
                                    checked={var_M11}
                                    onlabel={t('btn.yes')}
                                    offlabel={t('btn.no')}
                                    onstyle='success'
                                    offstyle='secondary'
                                    width='100'
                                    size='sm'
                                    onChange={ func_M11 }>
                                </BootstrapSwitchButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                            <img src={M12} className="rounded mx-auto d-block" alt="..." width="45%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M12 {t('M12.title')}</h5>
                                <p>{t('M12.1')}</p>
                                <div className="row justify-content-center">
                                    <div className="col-8">
                                        <input type="range" onChange={func_M12_1} className="form-range" value={count_M12_1} min="0" max="3" step="1" id="rangeM12_1"></input>
                                    </div>
                                    <div className="col-1">
                                        <label htmlFor="rangeM12_1" className="form-label">{count_M12_1}</label>
                                    </div>
                                </div>
                                <p style={pStyle}>{t('M12.2')}</p>
                                <div className="row justify-content-center">
                                    <div className="col-8">
                                        <input type="range" onChange={func_M12_2} className="form-range" value={count_M12_2} min="0" max="2" step="1" id="rangeM12_2"></input>
                                    </div>
                                    <div className="col-1">
                                        <label htmlFor="rangeM12_2" className="form-label">{count_M12_2}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                            <img src={M13} className="rounded mx-auto d-block" alt="..." width="50%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M13 {t('M13.title')}</h5>
                                <p style={pStyle}>{t('M13.1')}</p>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <select onChange={func_M13}  className="form-select form-select-sm" aria-label="size 3 select example" value={Score_M13}>
                                            <option value="0">0</option>
                                            <option value="5">1</option>
                                            <option value="10">2</option>
                                            <option value="15">3+</option>
                                        </select>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                            <img src={M14} className="rounded mx-auto d-block" alt="..." width="38%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M14 {t('M14.title')}</h5>
                                <p style={pStyle}>{t('M14.1')}</p>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <select onChange={func_M14_1}  className="form-select form-select-sm" aria-label="size 3 select example" value={Score_M14_1}>
                                            <option value="0">0</option>
                                            <option value="5">1</option>
                                            <option value="10">2</option>
                                            <option value="15">3+</option>
                                        </select>
                                    </div>
                                </div>
                                <p style={pStyle}>{t('M14.2')}</p> 
                                <div id="M14_2">
                                <BootstrapSwitchButton
                                    checked={var_M14_2}
                                    onlabel={t('btn.yes')}
                                    offlabel={t('btn.no')}
                                    onstyle='success'
                                    offstyle='secondary'
                                    width='100'
                                    size='sm'
                                    onChange={ func_M14_2 }>
                                </BootstrapSwitchButton> 
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                            <img src={M15} className="rounded mx-auto d-block" alt="..." width="45%"></img>
                            <div className="card-body">
                                <h5 className="card-title">M15 {t('M15.title')}</h5>
                                <p style={pStyle}>{t('M15.1')}</p>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <select onChange={func_M15}  className="form-select form-select-sm" aria-label="size 3 select example" value={Score_M15}>
                                            <option value="0">0</option>
                                            <option value="5">1</option>
                                            <option value="10">2</option>
                                            <option value="15">3+</option>
                                        </select>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                            <img src={M16} className="rounded mx-auto d-block" alt="..." width="30%"></img>
                            <div className="card-body">
                                <h5 className="card-title">{t('M16.title')}</h5>
                                <p>{t('M16.1')}</p>
                                <div>
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                        <select onChange={func_M16} className="form-select form-select-sm" aria-label="size 3 select example" value={tokens_M16}>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
                        <div className="card pt-2 pb-2 h-100">
                            <div className="card-body">
                                <h5 className="card-title">GP {t('MGP.title')}</h5>
                                <p>{t('MGP.1')}</p>
                                <div>
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                        <select onChange={func_MGP} className="form-select form-select-sm" aria-label="size 3 select example" value={MGP}>
                                            <option value="0"></option>
                                            <option value="2">Developing 2</option>
                                            <option value="3">Accomplished 3</option>
                                            <option value="4">Exceeds 4</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center" style={{marginBottom:'100px'}}>
                    <div className="col-lg-6">
                        <div className="card pt-2 pb-2 h-100">
                            <img src={ Logo } className="rounded mx-auto d-block" width="260px" height="130px" alt='SUPER-POWERED'></img>
                            <div className="card-body">
                                <h3>FLL 2022-2023</h3>
                                <p>SUPER POWERED，能源大挑戰</p>
                                <p>崇倫國中 OFDL LAI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar bg-custom fixed-bottom">
                <div className="container-fluid justify-content-center">
                    <h5 className="mt-auto mb-auto timer-style">{t('total_score')}{TotalScore}</h5>
                    <button onClick={init} type="button" className="btn btn-success" style={{marginLeft:'10px'}}>{t('btn.reset')}</button>
                </div>
            </nav>
        </div>
    )
}

export default App
