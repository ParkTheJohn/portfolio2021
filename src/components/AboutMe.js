import React from "react";
import './AboutMe.css';
import Grid from '@material-ui/core/Grid';
import portrait from "./images/aboutMePortraitTest.jpg";
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';


const AboutMe = () => {

    const handleResume = () => {
        window.open("https://drive.google.com/file/d/1ToiQ3Hvl05cqtrW-yDxn5iD3Uq2cioNl/view");
    };

    return (
        <div className="aboutMeContainer">
            <div className="aboutMeTitleContainer">
                <h1 className="aboutMeTitle">About Me</h1>
            </div>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <img src={portrait} alt="Wallpaper" className="aboutMeImage" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="aboutMeContent">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue. Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue. 
                    </div>
                    <br/>
                    <div className="aboutMeContent">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue. Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                    </div>
                    <div className="aboutMeContent">
                    <Button
                        variant="outlined"
                        color="inherit"
                        startIcon={<GetAppIcon />}
                        style={{color: "black", textTransform: "none"}}
                        onClick={handleResume}
                        size="large"
                    >
                        Resume
                    </Button>
                    </div>
                </Grid>
            </Grid>
            {/*<button onClick={click}>test</button>*/}
        </div>
    )
}

export default AboutMe;