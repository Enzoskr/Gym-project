import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
  position: sticky;
  width: 100%;
`;
export const DivLogo = styled.div`
  display: flex;
  @media (max-width: 768px) {
    order: 1;
  }
`;
export const Logo = styled.img`
  width: 100px;
`;

export const Menu = styled.div`
  display: flex;
  gap: 3rem;

  //
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #444;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem;
  }
`;
export const MenuItem = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    color: #fff;

    &:hover {
      color: #ff7f50;
    }
  }
`;
