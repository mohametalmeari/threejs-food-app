import { ContactShadows, Gltf } from "@react-three/drei/native";
import { useSandwich } from "../hooks/useSandwich";
import { Ingredient } from "./Ingredient";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
const INGREDIENT_SPACING = 0.2;
const INGREDIENT_SPACING_FINAL = 0.06;

export const Sandwich = () => {
  const sandwichRef = useRef();
  const ingredients = useSandwich((state) => state.ingredients);
  const addedToCart = useSandwich((state) => state.addedToCart);
  let ingredientSpacing = addedToCart
    ? INGREDIENT_SPACING_FINAL
    : INGREDIENT_SPACING;
  useFrame(() => {
    if (addedToCart) {
      sandwichRef.current.rotation.y += 0.01;
      ingredientSpacing = INGREDIENT_SPACING_FINAL;
    } else {
      sandwichRef.current.rotation.y = 0;
      ingredientSpacing = INGREDIENT_SPACING;
    }
  });
  return (
    <>
      <group position-y={(-ingredients.length * ingredientSpacing) / 2}>
        <group ref={sandwichRef}>
          {ingredients.map((ingredient, index) => (
            <Ingredient
              key={ingredient.id + ingredient.name}
              showPrice={index > 0 && index < ingredients.length - 1}
              ingredient={ingredient}
              position-y={index * INGREDIENT_SPACING}
            />
          ))}
        </group>
        <ContactShadows position-y={-0.5} opacity={0.6} />
      </group>
    </>
  );
};
