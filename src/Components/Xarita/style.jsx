import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: 50% 50%;
    background: radial-gradient(37.57% 158.69% at 63.71% 50.06%, #030375 0%, #304572 0.01%, #162441 100%);
    padding: 50px;
    border-radius: 10px;

    @media (max-width:1200px){
        display: flex;
        flex-direction: column-reverse;
        padding: 0px 50px 50px 50px;
    }

    @media (max-width: 425px){
        padding: 0px 25px 25px 25px;
    }
`;

export const MapDiv = styled.div`
    display: block;
    position: relative;

    @media (max-width:1200px){
        padding-top: 50px;
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const Title = styled.div`
    width: 100%;
    text-align: left;
    font-family: Montserrat;
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(118, 165, 206, 1);

    @media (max-width:768px){
        font-size: 18px;
        line-height: normal;
        margin-bottom: 10px;
    }

    @media (max-width:425px){
        font-size: 16px;
    }
`
export const Name = styled.div`
    font-family: Montserrat;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 88px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;

    @media (max-width:768px){
        font-size: 20px;
        line-height: normal;
        margin-bottom: 10px;
    }

    @media (max-width:425px){
        font-size: 18px;
    }
`
export const Description = styled.div`
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #6588a7;
    @media (max-width:768px){
        font-size: 14px;
        line-height: normal;
    }
    @media (max-width:425px){
        font-size: 12px;
    }
`
export const Description1 = styled.div`
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #6588a7;
    margin-top: 20px;
    @media (max-width:768px){
        font-size: 16px;
    }
    @media (max-width:450px){
        font-size: 14px;
    }
`
export const LineWrap = styled.div`
    width: 100%;
    display: flex;
    margin: 20px;
    margin-left: 0px;
    margin-top: 35px;

    @media (max-width: 425px) {
        margin: 15px;
    }
`
export const Inline = styled.div`
    width: 50%;
`
export const Infos = styled.div`
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: bold;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    @media (max-width:768px){
        font-size: 20px;
        line-height: normal;
        margin-top: 10px;
    }
    @media (max-width:425px){
        font-size: 14px;
    }
`