class Split:
    def __init__(self):
        self.player = [
            [1, 1],
            [1, 1]
        ]
        self.round = 1
        self.turn = 0

    def display(self):
        print("\n\tRound",self.round)
        print("\tPlayer 0 : ", self.player[0])
        print("\tPlayer 1 : ", self.player[1])
        self.round += 1

    def move(self):
        print("\tplayer",self.turn,"\b's turn\n\tPosible Moves")
        self.turn = 1 - self.turn
        if(self.turn == 1):
            print("\tmove 1 :",self.player[1][0]+self.player[0][0],',',
                self.player[self.turn][1])
            print("\tmove 2 :",self.player[1][0]+self.player[0][1],',',
                self.player[self.turn][1])
            print("\tmove 3 :",self.player[self.turn][0],',',
                self.player[0][0]+self.player[1][1])
            print("\tmove 4 :",self.player[self.turn][0],',',
                self.player[0][1]+self.player[1][1])
        if(self.turn == 0):
            print("\tmove 1 :",self.player[1][0]+self.player[0][0],',',
                self.player[self.turn][1])
            print("\tmove 2 :",self.player[0][0]+self.player[1][1],',',
                self.player[self.turn][1])
            print("\tmove 3 :",self.player[self.turn][0],',',
                self.player[1][0]+self.player[0][1])
            print("\tmove 4 :",self.player[self.turn][0],',',
                self.player[1][1]+self.player[0][1])

        choice = int(input("\nEnter your move : "))
        if(self.turn == 1):
            switch = {
                1: [self.player[1][0]+self.player[0][0], self.player[self.turn][1]],
                2: [self.player[1][0]+self.player[0][1], self.player[self.turn][1]],
                3: [self.player[self.turn][0], self.player[0][0]+self.player[1][1]],
                4: [self.player[self.turn][0], self.player[0][1]+self.player[1][1]]
            }
            self.player[self.turn] = switch.get(choice)
        if(self.turn == 0):
            switch = {
                1: [self.player[1][0]+self.player[0][0], self.player[self.turn][1]],
                2: [self.player[0][0]+self.player[1][1], self.player[self.turn][1]],
                3: [self.player[self.turn][0], self.player[1][0]+self.player[0][1]],
                4: [self.player[self.turn][0], self.player[1][1]+self.player[0][1]]
            }
            self.player[self.turn] = switch.get(choice)

    def check(self):
        a = [
            [0,0],
            [1,1]
        ]
        c = 0
        for i in self.player:
              i = [x%5 for x in i]
              a[c] = i
              c += 1
        #print(a)
        self.player = a
        if(self.player[self.turn] == [0,0]):
            return 1 - self.turn
        else:
            return 3

    def play(self):
        self.display()
        self.move()
        return self.check()

game = Split()
winner = game.play()
while(winner == 3):
    winner = game.play()
print("\n\tPlayer",winner,"Wins")
