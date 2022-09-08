class Tictactoe:
    def __init__(self):
        self.board = list("_ _ _ _ _ _ _ _ _")
        self.turn = 0
        self.player = ['O', 'X']
        self.filled = [0,0,0,0,0,0,0,0,0]
    
    def move(self):
        self.turn = 1 - self.turn
        print("Player",self.player[self.turn],"\b's turn")
        choice = int(input("Enter your move\(1-9) : "))
        while(self.filled[choice-1] == 1 or choice > 9 or choice < 1):
            choice = int(input("Enter valid move\(1-9) : "))
        self.board[2*choice-2] = self.player[self.turn]
        self.filled[choice-1] = 1
    
    def check(self):
        player = self.player[self.turn]
        # Row check
        if(  self.board[0:5:2] == [player,player,player] 
         or self.board[6:11:2] == [player,player,player]
        or self.board[12:17:2] == [player,player,player]):
                self.display()
                return self.turn

        # Column Check
        if(self.board[0:17:6] == [player,player,player] 
        or self.board[2:17:6] == [player,player,player]
        or self.board[4:17:6] == [player,player,player]):
                self.display()
                return self.turn

        # Diagonal Check
        if(self.board[0:17:8] == [player,player,player] 
        or self.board[4:15:4] == [player,player,player]):
                self.display()
                return self.turn

        if(sum(self.filled) == 9):
            self.display()
            return 4

        return 3

    def display(self):
        print("\t","".join(self.board[:5]))
        print("\t","".join(self.board[6:11]))
        print("\t","".join(self.board[12:17]))
    
    def play(self):
        self.display()
        self.move()
        return self.check()


game = Tictactoe()
winner = game.play()
while(winner == 3):
    winner = game.play()
if(winner == 1):
    print("Player X wins")
elif(winner == 0):
    print("Player O wins")
elif(winner == 4):
    print("No more moves. It's a draw.")
