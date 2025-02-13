import React from "react";
import { plansData } from "../../components/data/Plansdata";
import {
  Parent,
  SectionTitle,
  Div1,
  Div2,
  PlanCard,
  PlanName,
  PlanType,
  PlanExpiration,
} from "./PlansStyles";

const Plans = () => {
  return (
    <Parent>
      {/* Lista completa de miembros */}
      <Div1>
        <SectionTitle>Todos los Miembros</SectionTitle>
        {plansData.map((plan) => (
          <PlanCard key={plan.id}>
            <PlanName>Nombre: {plan.name}</PlanName>
            <PlanType>Plan: {plan.planType}</PlanType>
            <PlanExpiration>Vence: {plan.expirationDate}</PlanExpiration>
          </PlanCard>
        ))}
      </Div1>
      {/* Lista de planes que vencen pronto */}
      {/* Lista de planes que vencen pronto (ordenados de mayor a menor) */}
      <Div2>
        <SectionTitle>Próximos Vencimientos</SectionTitle>
        {plansData
          .filter(
            (plan) => new Date(plan.expirationDate) <= new Date("2025-02-28")
          )
          .sort(
            (a, b) => new Date(b.expirationDate) - new Date(a.expirationDate)
          ) // Orden descendente
          .map((plan) => (
            <PlanCard key={plan.id}>
              <PlanName>Nombre: {plan.name}</PlanName>
              <PlanType>Plan: {plan.planType}</PlanType>
              <PlanExpiration>Vence: {plan.expirationDate}</PlanExpiration>
            </PlanCard>
          ))}
      </Div2>
    </Parent>
  );
};

export default Plans;
