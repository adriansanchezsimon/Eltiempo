import './style/InfoDisplay.css';
import { getWeekDay, getIcon } from '../util/util';

const InfoDisplay = ({ info }) => {

    const infoDisplay = info.map((displayedInfo, key) => {
        const weekDay = getWeekDay(new Date(displayedInfo.forecastDate));
        const icon = getIcon(displayedInfo.idWeatherType);
        return(
            <div className="DayPanel" key={key}>
                <h3>{weekDay}</h3>
                <h2 style={{ fontSize: '70px', margin: '10px' }}>{icon}</h2>
                <div className="TempraturePanel">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4>Temp. Máx.</h4>
                        <h2>{parseInt(displayedInfo.tMax)}º</h2>
                    </div>
                    <div  style={{ marginLeft: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4>Temp. Min.</h4>
                        <h2>{parseInt(displayedInfo.tMin)}º</h2>
                    </div>
                </div>
                <div className="TempraturePanel">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4>Prob. Chuva</h4>
                        <h2>{parseInt(displayedInfo.precipitaProb)}%</h2>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection:'column', alignItems: 'center' }}>
            <div className="InfoDisplay">
                {infoDisplay}
            </div>
            <strong className="InfoAPI">Datos pillados de esta API tan chula: <a href="https://www.ipma.pt/pt" target="_blank" rel="noreferrer">IPMA</a></strong>
        </div>
    );
};

export default InfoDisplay;
