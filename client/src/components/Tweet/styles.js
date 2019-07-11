import styled from 'styled-components';

export const Container = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid #f1f3f4;
  display: flex;
  justify-content: flex-start;
`;

export const TweetUser = styled.strong`
  flex: 1;
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TweetInfo = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  p {
    flex: 5;
    width: 100px;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
