import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const ListItem = styled.ul`
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
`;

export const Item = styled.li`
    padding: 10px 15px;
    width: 100%;
    margin-bottom: 15px;
   
`;


export const Status = styled.span`
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
   
    margin-right: 15px;
`;



export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 15px;
`;

export const Name = styled.p`
    font-weight: 600;
    font-size: 26px;
    line-height: 25px;
    letter-spacing: 0.03em;
`;