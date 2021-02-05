import Statistic from "./Statistic";

const Statistics = ({good, neutral, bad}) => {
    const getTotal = () => {
        return good + neutral + bad;
    }
    const getAvg = () => {
        return (good-bad)/getTotal();
    }

    const getPositive= () => {
        return good / getTotal();
    }

    if(good || neutral || bad)
        return(
            <div>
                <table>
                    <tbody>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />
                    <Statistic text="all" value={getTotal()} />
                    <Statistic text="average" value={getAvg()} />
                    <Statistic text="positive" value={getPositive() +" %"} />
                    </tbody>
                </table>
              
            </div>
        )
    else
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
}

export default Statistics;