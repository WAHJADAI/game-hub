import React from "react";
import useTrailer from "../hooks/useTrailer";

interface Prop {
  gameId: number;
}

const GameTrailer = ({ gameId }: Prop) => {
  const { data, isLoading, error } = useTrailer(gameId);
  if (isLoading) return null;

  if (error) throw error;

  const frist = data?.results[0];
  return frist ? (
    <video src={frist.data[480]} poster={frist.preview} controls></video>
  ) : null;
};

export default GameTrailer;
