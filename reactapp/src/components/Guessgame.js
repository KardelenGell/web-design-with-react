import React, { Component } from 'react'

class Guessgame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            result1: 0,
            result2: 0,
            num1: 0
        }
        this.handlenum1Change = this.handlenum1Change.bind(this);
    }
    handlenum1Change(evt) {
        this.setState({ num1: Number(evt.target.value) });
    }
    componentDidMount() {
        this.random();
    }
    random = () => {
        var sayi;
        beginning: while (true) {
            sayi = ((Math.floor(Math.random() * (10000 - 1000)) + 1000));
            this.setState({ result: sayi });
            var birler = (sayi % 10);
            var onlar = ((sayi % 100) - birler) / 10;
            var yuzler = ((sayi % 1000) - (sayi % 100)) / 100;
            var binler = (sayi - (sayi % 1000)) / 1000;
            if (birler == onlar || birler == yuzler || birler == binler || onlar == yuzler || onlar == binler || yuzler == binler) continue beginning;
            break;
        }
    }

    check = () => {
        var str = this.state.num1;
        var random = this.state.result;
        var dogruNokta = 0;
        var yanlisNokta = 0;
        var textResult = '';

        var birler = (random % 10);
        var onlar = ((random % 100) - birler) / 10;
        var yuzler = ((random % 1000) - (random % 100)) / 100;
        var binler = (random - (random % 1000)) / 1000;

        // this.setState({ result1: random })

        var tbirler = (str % 10);
        var tonlar = ((str % 100) - tbirler) / 10;
        var tyuzler = ((str % 1000) - (str % 100)) / 100;
        var tbinler = (str - (str % 1000)) / 1000;

        if (tbirler == birler) {
            dogruNokta++;
        } else if (tbirler == onlar || tbirler == yuzler || tbirler == binler) {
            yanlisNokta++;
        } if (tonlar == onlar) {
            dogruNokta++;
        }
        else if (tonlar == birler || tonlar == yuzler || tonlar == binler) {
            yanlisNokta++;
        }
        if (tyuzler == yuzler) {
            dogruNokta++;
        }
        else if (tyuzler == birler || tyuzler == onlar || tyuzler == binler) {
            yanlisNokta++;
        }
        if (tbinler == binler) {
            dogruNokta++;
        }
        else if (tbinler == birler || tbinler == onlar || tbinler == yuzler) {
            yanlisNokta++;
        }

        //for result
        if (yanlisNokta == 0) {
            textResult = '+' + dogruNokta;
        }
        else if (dogruNokta == 0) {
            textResult = '-' + yanlisNokta;
        }
        else {
            textResult = '+' + dogruNokta + '-' + yanlisNokta;
        }

        if (textResult == "+0") {
            textResult = "0";
        }

        if (textResult == "+4") {
            window.alert("Congratulations! The answer is " + random)
        }

        this.setState({ result2: textResult })
    }

    render() {
        return (
            <div>  <br></br>
                <h1>Guess the number with four digits</h1>
    Type your guess: <br></br> <input onChange={this.handlenum1Change}></input>  <br></br><br></br>

                <input type="button" value="Check!" onClick={this.check}></input>   <br></br><br></br>
                {/* Random number is:  <div>{this.state.result1}</div> */}
    Result: <div>{this.state.result2}</div>

            </div>
        )
    }
}

export default Guessgame;