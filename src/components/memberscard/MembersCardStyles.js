import styled from "styled-components";

export const MembersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
`;

export const MemberCard = styled.div`
  grid-column: span 5;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .name {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .planType {
    font-size: 1.2rem;
    color: #555;
  }
  .expiration {
    font-size: 0.9rem;
    color: #888;
  }
`;
