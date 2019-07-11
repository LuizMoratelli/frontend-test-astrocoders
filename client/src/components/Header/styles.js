import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eceff1;
`;

export const Brand = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  
  img:first-child {
    padding: 0 10px 0 0;
  }
`;

export const SearchBar = styled.input`
  display: flex;
  flex: 1;
  margin: 0 40px;
  padding: 10px; 
  margin-left: 150px;
  max-width: 600px;
  border: 1px solid #f1f3f4;
  background-color: #f1f3f4;
  border-radius: 10px;
`;

export const SideMenu = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
`;

export const Photo = styled.img`
  border-radius: 50%;
`;
