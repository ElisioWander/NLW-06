import styled from "styled-components";

export const RoomCodeButton = styled.button`
    height: 40px;

    border: solid 1px var(--cyan-500);
    border-radius: 8px;

    display: flex;

    cursor: pointer;
    overflow: hidden;

    background-color: var(--white);


    div {
        height: 40px;
        
        padding: 0 12px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        background-color: var(--cyan-500);
    }

    span {
        width: 230px;
        
        padding: 0 16px 0 12px;
        
        display: block;
        align-self: center;
        flex: 1;
        
        font-size: 14px;
        font-weight: 500;
    }
`