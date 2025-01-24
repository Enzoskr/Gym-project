import styled from "styled-components";

export const MembersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
  width: 100%;
  padding: 16px;
  border: 1px solid #ccc;
`;

export const MemberCard = styled.div` /* Cambié "membercard" a "MemberCard" */
  grid-column: span 5;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
