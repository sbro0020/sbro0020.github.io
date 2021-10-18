import pandas as pd

def cleanData():
    df = pd.read_csv("mathematicans.csv",usecols=["occupation"],dtype=str)

    tally = {}
    for countList in df["occupation"]:
        countList = str(countList)
        if countList[0]!="[":
            continue

        countList = countList[1:len(countList)-1].replace("\"","").replace("'","").split(",")
        
        for i in range(0,len(countList)):
            occup = countList[i].strip()
            try:
                tally[occup] += 1
            except KeyError:
                tally[occup] = 1

        output = "occupation,count\n"
        for occupation,cnt in tally.items():
            output += occupation + ',' + str(cnt) + '\n'

        with open("output.csv","w") as file:
            file.write(output)

def run():
    cleanData()
    print("Done")

run()