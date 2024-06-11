import styled from "@emotion/styled"


interface CardShowProps {
    isShowResult: boolean;
}

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 30px;
gap: 20px;
width: 300px;
height: 300px;
background-color: #0BC0C0;
`

export const Name = styled.p`
font-size: 24px;
` 