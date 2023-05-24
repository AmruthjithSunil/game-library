type Box = {
  id: number;
  content: number;
};

const initBoxes: Box[][] = [];
for (let i = 0; i < 4; i++) {
  const row: Box[] = [];
  for (let j = 0; j < 4; j++) {
    row.push({ id: i * 4 + j, content: 0 });
  }
  initBoxes.push(row);
}

initBoxes[1][1].content = 2;
initBoxes[2][2].content = 2;

export { initBoxes };
