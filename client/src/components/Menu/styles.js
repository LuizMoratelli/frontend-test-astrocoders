import styled from 'styled-components';

export const Container = styled.nav`
  width: 300px;
  flex-shrink: 0;
  height: 100vh;
  padding: 10px 0 0 0;

  img {
    margin: 0 18px 0 0;
    width: 20px;
    height: 20px;
    opacity: .54;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  ul li {
    padding: 5px 0;
    border-radius: 30px;
    padding: 10px;
    margin-right: 40px;
    display: flex;
    align-items: center;
  }

  ul li a {
    text-decoration: none;
    color: #000;
  }

  ul li.active {
    font-weight: bold;
    background-color: #f1f3f4;
  }
`;
