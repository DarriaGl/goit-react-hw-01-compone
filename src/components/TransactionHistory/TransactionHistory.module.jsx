import styled from '@emotion/styled';
export const Tablet = styled.table`
  margin-top: 50px;
  text-transform: capitalize;
  width: 100%;
  margin-bottom: 20px;
  background: #f5ccff;
  border-radius: 18px;
`;
export const TabletHead = styled.thead`
  background-color: #9747ff;
`;
export const TabletTh = styled.th`
  color: black;
  border-width: 0 5px 5px 0;
  border-color: white;
  border-radius: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const TabletBody = styled.tbody`
  backgrond-color: #f5ccff;
`;
export const TabletTr = styled.tr`
  border: 1px solid #9747ff;
  :last-child td:first-child {
    border-radius: 0 0 0 10px;
  }
  :last-child td:last-child {
    border-radius: 0 0 10px 0;
  }
`;
export const TabletTd = styled.td`
  padding: 10px 20px;
  color: black;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
`;
