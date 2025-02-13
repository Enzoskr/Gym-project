import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  list-style: none;
  justify-content: center;
`;

export const ListItem = styled.li`
  background: #007bff;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  &:hover {
    background: #0056b3;
  }
`;

export const ExerciseList = styled.ul`
  display: flex;
  flex-direction: column; /* Alinea los ejercicios en una columna */
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 0;
  list-style: none;
  margin-top: 20px;
`;

export const ExerciseCard = styled.li`
  background: #ffffff;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

export const ExerciseLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 80px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;
