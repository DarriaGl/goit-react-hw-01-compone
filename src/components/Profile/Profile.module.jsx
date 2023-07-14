import styled from '@emotion/styled';
export const Profilecontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  margin-top: 50px;
  width: min-content;

  background: gray;
  border-radius: 3px;
`;
export const Profdescription = styled.div`
  position: relative;
  text-align: center;
  adding-top: 15px;
`;
export const Profimage = styled.img`
  position: absolute;
  transform: translate(-50px, -60px);

  max-height: 92px;
  border-radius: 50%;
  background: #d9d9d9;
  border: 6px solid #ffffff;
`;
export const Profname = styled.p`
  font-weight: 700;
  line-height: 1.1;

  margin-top: 50px;
  margin-bottom: 0;
  color: #000000;
`;
export const Proftag = styled.p`
  font-size: 12px;

  margin-top: 6px;
  margin-bottom: 0;
  color: #969696;
`;
export const Proflocation = styled.p`
  font-weight: 700;
  font-size: 12px;

  margin-top: 6px;
  margin-bottom: 0;
  color: #000000;
`;
export const Profstats = styled.ul`
  list-style: none;
  display: flex;
  padding: 12px;
  margin: 0;
  li {
    display: grid;
    width: 80px;
    justify-items: center;
    :not(:last-child) {
      border-right: 1px solid #999999;
    }
    @media screen and (min-width: 768px) {
      width: 128px;
    }
  }
`;
export const Statslabel = styled.span`
  font-weight: 400;
  font-size: 12px;

  margin-bottom: 6px;
  color: #999999;
`;
export const Statsquantity = styled.span`
  font-weight: 700;
  font-size: 24px;

  color: #000000;
`;
