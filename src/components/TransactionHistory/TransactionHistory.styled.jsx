import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    text-align: center;
    
    & thead th {
        padding: 10px;
        font-weight: 600;
        font-size: 16px;
        line-height: 14px;
        letter-spacing: 0.02em;
        
        text-transform: uppercase;
    }
    & tbody td {
        padding: 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.03em;
    }
    & tbody tr:nth-child(even) {
       
    }
    
    
    & thead th,
    & tbody td {
        width: calc(100% / 3);
  }
`;
