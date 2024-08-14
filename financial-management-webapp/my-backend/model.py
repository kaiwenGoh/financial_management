# importing the required libraries
import pandas as pd
import numpy as np
import sklearn.model_selection
from sklearn.linear_model import LinearRegression
import sys
import json



def train_and_save_model(data):

    spending_categories = [int(category) for category in data.get('spendingCategories', [])]
    saving = int(data.get('savings', 0))
    earning = int(data.get('income', 0))
    location = data.get('location', '').lower()
    spending = pd.read_csv('Data for vichack cleaned.csv')
    pd.set_option('display.max_columns', None)
    cleaned_spending = spending.iloc[1:,1:]

    

    if location == 'victoria' or location == "":
        selected_data = cleaned_spending.iloc[:, :10]
    elif location == 'nsw':
        selected_data = cleaned_spending.iloc[:, 11:21]
    elif location == 'queensland':
        selected_data = cleaned_spending.iloc[:, 22:32]
    elif location == 'southaus':
        selected_data = cleaned_spending.iloc[:, 33:43]
    elif location == 'tasmania':
        selected_data = cleaned_spending.iloc[:, 44:54]
    elif location == 'northaus':
        selected_data = cleaned_spending.iloc[:, 55:65]
    elif location == 'canberra':
        selected_data = cleaned_spending.iloc[:, 66:76]
    elif location == 'westaus':
        selected_data = cleaned_spending.iloc[:, 77:87]

    
    
    selected_columns = selected_data.iloc[:,spending_categories].apply(pd.to_numeric, errors='coerce')

    sum_of_columns = selected_columns.sum(axis=1)

    X_train, X_test, Y_train, Y_test = sklearn.model_selection.train_test_split(sum_of_columns.values.reshape(-1, 1), selected_data.iloc[:,spending_categories], test_size=0.2, random_state=42)
    model = LinearRegression()
    model.fit(X_train, Y_train)

    income = earning - saving
    to_predict = np.array([[income * 10000]])

    output = model.predict(to_predict)
   
    print(output)

def main():
    # Read input data from command line argument
    input_data = json.loads(sys.argv[1])
    
    # # Train and save the model
    train_and_save_model(input_data)

if __name__ == "__main__":
    main()