import styled from "styled-components";

export const Parent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 8px;
  height: 85vh; /* Ocupa toda la altura del viewport */
  width: 100%;
  padding: 16px;
`;

export const Div1 = styled.div`
  grid-column: span 3 / span 3;
  grid-row: span 7 / span 7;
  background-color: #f4f4f4;
  padding: 16px;
  border-radius: 8px;
  overflow-y: auto; /* Desliza solo dentro del contenedor */
  max-height: 100vh; /* Mantiene la altura fija */
`;

export const Div2 = styled.div`
  grid-column: span 2 / span 2;
  grid-row: span 7 / span 7;
  grid-column-start: 4;
  background-color: #e3e3e3;
  padding: 16px;
  border-radius: 8px;
  overflow-y: auto; /* Desliza solo dentro del contenedor */
  max-height: 100vh; /* Mantiene la altura fija */
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 12px;
`;

export const PlanCard = styled.div`
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
  border-left: 4px var(--lines-borders-color) solid;
`;

export const PlanName = styled.p`
  font-weight: bold;
`;

export const PlanType = styled.p`
  color: #555;
`;

export const PlanExpiration = styled.p`
  color: red;
  font-size: 0.9rem;
`;
