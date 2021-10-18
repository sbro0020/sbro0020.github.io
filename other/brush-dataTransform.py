import pandas as pd

def cleanData():
    df = pd.read_csv("C:\\Users\\Sean\\Documents\\School\\Data Vis\\Assignment\\idk\\data.csv",dtype=str)

    count = 0
    resp = "year,num\n"
    for year in range(-1700,2017):
        for i in range(0,len(df)):
            entry = df.loc[i]
            if int(entry['year of birth'])==year: 
                count += 1
            elif int(entry['year of death'])==year:
                count -= 1
        
        resp += str(year) + ","+str(count)+"\n"
    
    with open("output.csv","w") as file:
        file.write(str(resp))

def run():
    cleanData()
    print("Done")

run()