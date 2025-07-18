import { Grid, styled } from "@mui/material"
import avatar from "../../../../assets/images/avatar.jpeg"


const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",

    }));

        const StyledImg = styled("img")(() => ({
        width: "30%",
        height: "30%",
        borderRadius: "50%"

    }));

  return (
    <>
        <StyledHero>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        xs=8
                    </Grid>
                    <Grid item xs={4}>
                        xs=4
                    </Grid>
                    <Grid item xs={4}>
                        xs=4
                    </Grid>
                    <Grid item xs={8}>
                        xs=8
                    </Grid>
                </Grid>
                <StyledImg src={avatar} alt="Avatar"/>
            </StyledHero>
    </>
  )
}

export default Hero
