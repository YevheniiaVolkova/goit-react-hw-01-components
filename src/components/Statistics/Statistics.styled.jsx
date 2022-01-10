import styled from 'styled-components';

export const StatisticsSection = styled.section`
   
    margin-bottom: 5px;
`;


export const StatisticsTitle = styled.h2`
    padding: 25px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 21px;
    line-height: 25px;
    letter-spacing: 0.03em;
`;

export const StatList = styled.ul`
    display: flex;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% / 5);
    padding: 5px 5px;
    text-align: center;
    
    
`;


export const Label = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.03em;
`;

export const Percentage = styled.span`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.03em;
`;