"use client";

import React, { useState } from "react";

const EMPTY = 0;
const PLAYER_ONE = 1;
const PLAYER_TWO = 2;

const ROW = 7;
const COL = 6;

type Board = number[][];

export default function Home() {
  const [board, setBoard] = useState<Board>(initializeBoard);
  function initializeBoard(): Board {
    const board: Board = [];
    for (let row = 0; row < ROW; row++) {
      board[row] = Array.from({ length: COL }, () => EMPTY);
    }
    return board;
  }
  return (
    <main className="flex flex-col  items-center min-h-screen max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold p-8">Connect Four </h1>
      <div className="w-full">
        <div className="px-8 pb-8">
          <h1 className="font-bold mb-2">What is Connect Four?</h1>
          <p className="text-justify">
            Connect Four is a two-player strategy game played on a vertical grid
            with six rows and seven columns. The game consists of a grid where
            players take turns dropping colored discs into the columns. The
            discs fall to the lowest available space within the column.
          </p>
        </div>
        <div className="px-8 pb-8">
          <h1 className="font-bold">Objective:</h1>
          <p className="text-justify">
            Be the first player to form a horizontal, vertical, or diagonal line
            of four of one's own colored discs. Players must strategically drop
            their discs to block their opponent from forming a line while
            attempting to create their own.
          </p>
        </div>
      </div>
      {/* Layout */}
      <div className="grid grid-cols-7 w-full place-items-center h-full pb-8">
        {board.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="border w-full px-8 bg-blue-500 flex flex-col items-center justify-center"
          >
            {row.map((cell, columnIndex) => (
              <div
                key={columnIndex}
                className="border-4 border-blue-700 p-6 sm:p-8 md:p-10 my-4 rounded-full hover:bg-black bg-white"
              ></div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
