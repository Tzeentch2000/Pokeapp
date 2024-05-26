import { useState, useEffect } from "react";
import style from "./Region.module.scss";
import { useParams } from "react-router-dom";

const Region = () => {
  let { id } = useParams();
  const [pokedex, setPokedex] = useState({});

  useEffect(() => {
    const fetchPokemons = async () => {
      fetch(`https://pokeapi.co/api/v2/generation/${id}`)
        .then((response) => {
          if (!response.ok) throw new Error("Network response was not ok");
          return response.json();
        })
        .then((data) => {
          let pokemons = [];
          Promise.allSettled(
            data.pokemon_species.map((pokemon) => {
              const formated = pokemon.url.split("/");
              return fetch(
                `https://pokeapi.co/api/v2/pokemon/${
                  formated[formated.length - 2]
                }`
              ).then((response) => response.json());
            })
          ).then((responses) => {
            pokemons = responses.map((response) => {
              if (response.status === "fulfilled") {
                return {
                  name: response.value.species.name,
                  url: response.value.sprites.back_default,
                };
              }
            });

            const formatedPokedex = {
              region: data.main_region.name,
              pokemons,
            };
            setPokedex(formatedPokedex);
          });
        });
    };

    fetchPokemons();
  }, [id]);

  return (
    <div className={style.container}>
      <h2>{pokedex?.region ?? null}</h2>
      {pokedex?.pokemons && (
        <div className={style.pokedex}>
          {pokedex.pokemons.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <p>{pokemon.name}</p>
                <img
                  src={pokemon.url}
                  width={100}
                  alt={`${pokemon.name}-image`}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Region;
