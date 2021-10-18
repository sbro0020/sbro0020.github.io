import pandas as pd

def cleanData():
    df = pd.read_csv("mathematicans.csv",usecols=["country of citizenship"],dtype=str)

    tally = {}
    for countList in df["country of citizenship"]:
        countList = str(countList)
        if countList[0]!="[":
            continue

        countList = countList[1:len(countList)-1].replace("\"","").replace("'","").split(",")

        if len(countList) == 1:
            try:
                tally[countList[0].strip()][2] += 1
            except KeyError:
                tally[countList[0].strip()] = [0,0,1]
        
        for i in range(0,len(countList)):
            if i+1==len(countList):
                continue
            else:
                origin = countList[i+1].strip()
                dest = countList[i].strip()
                try:
                    tally[dest][1] += 1
                except KeyError:
                    tally[dest] = [0,1,0]
                try:
                    tally[origin][0] += 1
                except KeyError:
                    tally[origin] = [1,0,0]
        
        output = "country,stayed,in,out\n"
        for country,stats in tally.items():
            output += country + ',' + str(stats[2]) + ',' + str(stats[1]) + ',' + str(stats[0]) + '\n'

        with open("output.csv","w") as file:
            file.write(output)

def run():
    cleanData()
    print("Done")

run()