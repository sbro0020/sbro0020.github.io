import pandas as pd

def cleanData():
    df = pd.read_csv("C:\\Users\\Sean\\Documents\\School\\Data Vis\\Assignment\\line\\data.csv",dtype=str)

    data = []
    for i in range(0,len(df)):
        entry = df.loc[i]
        dEnt = {"birth": entry['year of birth'], "death": entry['year of death'], "age": entry['age']}
        data.append(dEnt)
    
    with open("output.csv","w") as file:
        file.write(str(data))

def run():
    cleanData()
    print("Done")

run()