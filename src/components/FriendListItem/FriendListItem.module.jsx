import styled from '@emotion/styled';

export const FriendItem = styled.li`
  position: relative;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  padding-top: 15px;
  :not(:last-child) {
    border-bottom: 1px solid #fff;
  }
`;
export const FriendStatus = styled.span`
  position: absolute;
  left: 15px;
  bottom: 20px;
  display: block;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
export const FriendAvatar = styled.img`
  display: block;
  margin-left: 35px;
`;
export const FriendName = styled.p`
  margin-top: 10px;
  margin-left: 10px;
  font-weight: bold;
`;
