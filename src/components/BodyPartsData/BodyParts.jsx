import React, { useState } from "react";
import { BodyPartsData } from "../data/Databody";
import { exercisesData } from "../data/exercisesData";
import {
  Container,
  Title,
  List,
  ListItem,
  ExerciseList,
  ExerciseCard,
  Checkbox,
  Input,
} from "./BodyPartstyles";

const BodyParts = ({ selectedBodyPart, setSelectedBodyPart }) => {
  const [selectedExercises, setSelectedExercises] = useState({});

  const handleExerciseSelect = (exerciseId) => {
    setSelectedExercises((prev) => ({
      ...prev,
      [exerciseId]: prev[exerciseId] ? undefined : { reps: "" },
    }));
  };

  const handleRepsChange = (exerciseId, reps) => {
    setSelectedExercises((prev) => ({
      ...prev,
      [exerciseId]: { reps },
    }));
  };

  return (
    <Container>
      <Title>Selecciona una parte del cuerpo</Title>
      <List>
        {BodyPartsData.map((part) => (
          <ListItem
            key={part.id}
            onClick={() => setSelectedBodyPart(part.name)}
          >
            {part.name}
          </ListItem>
        ))}
      </List>

      {selectedBodyPart && (
        <>
          <Title>Ejercicios para {selectedBodyPart}</Title>
          {exercisesData[selectedBodyPart] ? (
            <ExerciseList>
              {exercisesData[selectedBodyPart].map((exercise) => (
                <ExerciseCard key={exercise.id}>
                  <label>
                    <Checkbox
                      type="checkbox"
                      checked={!!selectedExercises[exercise.id]}
                      onChange={() => handleExerciseSelect(exercise.id)}
                    />
                    {exercise.name}
                  </label>
                  {selectedExercises[exercise.id] && (
                    <Input
                      type="number"
                      min="1"
                      placeholder="Reps"
                      value={selectedExercises[exercise.id].reps}
                      onChange={(e) =>
                        handleRepsChange(exercise.id, e.target.value)
                      }
                    />
                  )}
                </ExerciseCard>
              ))}
            </ExerciseList>
          ) : (
            <p>No hay ejercicios disponibles para esta parte del cuerpo.</p>
          )}
        </>
      )}
    </Container>
  );
};

export default BodyParts;
