{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 4,
   "id": "8018411d-8ce9-4e92-835b-8a297f0c5b42",
   "metadata": {},
   "outputs": [],
   "source": [
    "from flask import Flask, render_template\n",
    "app = Flask(__name__)\n",
    "\n",
    "@app.route('/')\n",
    "def index():\n",
    "    return render_template('index.html')\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "id": "d588cbf4-df57-4966-8782-92150fbb3287",
   "metadata": {},
   "outputs": [],
   "source": [
    "import io\n",
    "import matplotlib.pyplot as plt\n",
    "from flask import Response\n",
    "\n",
    "@app.route('/plot.png')\n",
    "def plot_png():\n",
    "    fig = create_figure()  # Your function to create the matplotlib figure\n",
    "    output = io.BytesIO()\n",
    "    fig.savefig(output, format='png')\n",
    "    output.seek(0)\n",
    "    return Response(output.getvalue(), mimetype='image/png')\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 6,
   "id": "f762e478-0b0c-4fbc-83c7-e6b426ac0222",
   "metadata": {},
   "outputs": [
    {
     "ename": "ParserError",
     "evalue": "Error tokenizing data. C error: EOF inside string starting at row 1321",
     "output_type": "error",
     "traceback": [
      "\u001b[0;31m---------------------------------------------------------------------------\u001b[0m",
      "\u001b[0;31mParserError\u001b[0m                               Traceback (most recent call last)",
      "Cell \u001b[0;32mIn[6], line 8\u001b[0m\n\u001b[1;32m      5\u001b[0m engine \u001b[38;5;241m=\u001b[39m create_engine(\u001b[38;5;124m'\u001b[39m\u001b[38;5;124msqlite:///income_inequality.db\u001b[39m\u001b[38;5;124m'\u001b[39m)\n\u001b[1;32m      7\u001b[0m \u001b[38;5;66;03m# Load data from CSV\u001b[39;00m\n\u001b[0;32m----> 8\u001b[0m metadata \u001b[38;5;241m=\u001b[39m pd\u001b[38;5;241m.\u001b[39mread_csv(\u001b[38;5;124m'\u001b[39m\u001b[38;5;124m/Users/haseen/Downloads/WID_Metadata_01102024-175101.csv\u001b[39m\u001b[38;5;124m'\u001b[39m)\n\u001b[1;32m      9\u001b[0m data \u001b[38;5;241m=\u001b[39m pd\u001b[38;5;241m.\u001b[39mread_csv(\u001b[38;5;124m'\u001b[39m\u001b[38;5;124m/Users/haseen/Downloads/WID_Data_01102024-175101.csv\u001b[39m\u001b[38;5;124m'\u001b[39m)\n\u001b[1;32m     11\u001b[0m \u001b[38;5;66;03m# Import data into the database\u001b[39;00m\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/pandas/io/parsers/readers.py:1026\u001b[0m, in \u001b[0;36mread_csv\u001b[0;34m(filepath_or_buffer, sep, delimiter, header, names, index_col, usecols, dtype, engine, converters, true_values, false_values, skipinitialspace, skiprows, skipfooter, nrows, na_values, keep_default_na, na_filter, verbose, skip_blank_lines, parse_dates, infer_datetime_format, keep_date_col, date_parser, date_format, dayfirst, cache_dates, iterator, chunksize, compression, thousands, decimal, lineterminator, quotechar, quoting, doublequote, escapechar, comment, encoding, encoding_errors, dialect, on_bad_lines, delim_whitespace, low_memory, memory_map, float_precision, storage_options, dtype_backend)\u001b[0m\n\u001b[1;32m   1013\u001b[0m kwds_defaults \u001b[38;5;241m=\u001b[39m _refine_defaults_read(\n\u001b[1;32m   1014\u001b[0m     dialect,\n\u001b[1;32m   1015\u001b[0m     delimiter,\n\u001b[0;32m   (...)\u001b[0m\n\u001b[1;32m   1022\u001b[0m     dtype_backend\u001b[38;5;241m=\u001b[39mdtype_backend,\n\u001b[1;32m   1023\u001b[0m )\n\u001b[1;32m   1024\u001b[0m kwds\u001b[38;5;241m.\u001b[39mupdate(kwds_defaults)\n\u001b[0;32m-> 1026\u001b[0m \u001b[38;5;28;01mreturn\u001b[39;00m _read(filepath_or_buffer, kwds)\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/pandas/io/parsers/readers.py:626\u001b[0m, in \u001b[0;36m_read\u001b[0;34m(filepath_or_buffer, kwds)\u001b[0m\n\u001b[1;32m    623\u001b[0m     \u001b[38;5;28;01mreturn\u001b[39;00m parser\n\u001b[1;32m    625\u001b[0m \u001b[38;5;28;01mwith\u001b[39;00m parser:\n\u001b[0;32m--> 626\u001b[0m     \u001b[38;5;28;01mreturn\u001b[39;00m parser\u001b[38;5;241m.\u001b[39mread(nrows)\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/pandas/io/parsers/readers.py:1923\u001b[0m, in \u001b[0;36mTextFileReader.read\u001b[0;34m(self, nrows)\u001b[0m\n\u001b[1;32m   1916\u001b[0m nrows \u001b[38;5;241m=\u001b[39m validate_integer(\u001b[38;5;124m\"\u001b[39m\u001b[38;5;124mnrows\u001b[39m\u001b[38;5;124m\"\u001b[39m, nrows)\n\u001b[1;32m   1917\u001b[0m \u001b[38;5;28;01mtry\u001b[39;00m:\n\u001b[1;32m   1918\u001b[0m     \u001b[38;5;66;03m# error: \"ParserBase\" has no attribute \"read\"\u001b[39;00m\n\u001b[1;32m   1919\u001b[0m     (\n\u001b[1;32m   1920\u001b[0m         index,\n\u001b[1;32m   1921\u001b[0m         columns,\n\u001b[1;32m   1922\u001b[0m         col_dict,\n\u001b[0;32m-> 1923\u001b[0m     ) \u001b[38;5;241m=\u001b[39m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_engine\u001b[38;5;241m.\u001b[39mread(  \u001b[38;5;66;03m# type: ignore[attr-defined]\u001b[39;00m\n\u001b[1;32m   1924\u001b[0m         nrows\n\u001b[1;32m   1925\u001b[0m     )\n\u001b[1;32m   1926\u001b[0m \u001b[38;5;28;01mexcept\u001b[39;00m \u001b[38;5;167;01mException\u001b[39;00m:\n\u001b[1;32m   1927\u001b[0m     \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mclose()\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/pandas/io/parsers/c_parser_wrapper.py:234\u001b[0m, in \u001b[0;36mCParserWrapper.read\u001b[0;34m(self, nrows)\u001b[0m\n\u001b[1;32m    232\u001b[0m \u001b[38;5;28;01mtry\u001b[39;00m:\n\u001b[1;32m    233\u001b[0m     \u001b[38;5;28;01mif\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mlow_memory:\n\u001b[0;32m--> 234\u001b[0m         chunks \u001b[38;5;241m=\u001b[39m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_reader\u001b[38;5;241m.\u001b[39mread_low_memory(nrows)\n\u001b[1;32m    235\u001b[0m         \u001b[38;5;66;03m# destructive to chunks\u001b[39;00m\n\u001b[1;32m    236\u001b[0m         data \u001b[38;5;241m=\u001b[39m _concatenate_chunks(chunks)\n",
      "File \u001b[0;32mparsers.pyx:838\u001b[0m, in \u001b[0;36mpandas._libs.parsers.TextReader.read_low_memory\u001b[0;34m()\u001b[0m\n",
      "File \u001b[0;32mparsers.pyx:905\u001b[0m, in \u001b[0;36mpandas._libs.parsers.TextReader._read_rows\u001b[0;34m()\u001b[0m\n",
      "File \u001b[0;32mparsers.pyx:874\u001b[0m, in \u001b[0;36mpandas._libs.parsers.TextReader._tokenize_rows\u001b[0;34m()\u001b[0m\n",
      "File \u001b[0;32mparsers.pyx:891\u001b[0m, in \u001b[0;36mpandas._libs.parsers.TextReader._check_tokenize_status\u001b[0;34m()\u001b[0m\n",
      "File \u001b[0;32mparsers.pyx:2061\u001b[0m, in \u001b[0;36mpandas._libs.parsers.raise_parser_error\u001b[0;34m()\u001b[0m\n",
      "\u001b[0;31mParserError\u001b[0m: Error tokenizing data. C error: EOF inside string starting at row 1321"
     ]
    }
   ],
   "source": [
    "import pandas as pd\n",
    "from sqlalchemy import create_engine\n",
    "\n",
    "# Setup the database connection\n",
    "engine = create_engine('sqlite:///income_inequality.db')\n",
    "\n",
    "# Load data from CSV\n",
    "metadata = pd.read_csv('/Users/haseen/Downloads/WID_Metadata_01102024-175101.csv')\n",
    "data = pd.read_csv('/Users/haseen/Downloads/WID_Data_01102024-175101.csv')\n",
    "\n",
    "# Import data into the database\n",
    "metadata.to_sql('metadata', con=engine, if_exists='replace', index=False)\n",
    "data.to_sql('data', con=engine, if_exists='replace', index=False)\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 12,
   "id": "c0ecccae-9870-4264-bce5-59f89548c3ff",
   "metadata": {},
   "outputs": [
    {
     "ename": "ObjectNotExecutableError",
     "evalue": "Not an executable object: 'SELECT * FROM data LIMIT 5;'",
     "output_type": "error",
     "traceback": [
      "\u001b[0;31m---------------------------------------------------------------------------\u001b[0m",
      "\u001b[0;31mAttributeError\u001b[0m                            Traceback (most recent call last)",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/sqlalchemy/engine/base.py:1414\u001b[0m, in \u001b[0;36mConnection.execute\u001b[0;34m(self, statement, parameters, execution_options)\u001b[0m\n\u001b[1;32m   1413\u001b[0m \u001b[38;5;28;01mtry\u001b[39;00m:\n\u001b[0;32m-> 1414\u001b[0m     meth \u001b[38;5;241m=\u001b[39m statement\u001b[38;5;241m.\u001b[39m_execute_on_connection\n\u001b[1;32m   1415\u001b[0m \u001b[38;5;28;01mexcept\u001b[39;00m \u001b[38;5;167;01mAttributeError\u001b[39;00m \u001b[38;5;28;01mas\u001b[39;00m err:\n",
      "\u001b[0;31mAttributeError\u001b[0m: 'str' object has no attribute '_execute_on_connection'",
      "\nThe above exception was the direct cause of the following exception:\n",
      "\u001b[0;31mObjectNotExecutableError\u001b[0m                  Traceback (most recent call last)",
      "Cell \u001b[0;32mIn[12], line 3\u001b[0m\n\u001b[1;32m      1\u001b[0m \u001b[38;5;66;03m# Test query to fetch data\u001b[39;00m\n\u001b[1;32m      2\u001b[0m \u001b[38;5;28;01mwith\u001b[39;00m engine\u001b[38;5;241m.\u001b[39mconnect() \u001b[38;5;28;01mas\u001b[39;00m connection:\n\u001b[0;32m----> 3\u001b[0m     result \u001b[38;5;241m=\u001b[39m connection\u001b[38;5;241m.\u001b[39mexecute(\u001b[38;5;124m\"\u001b[39m\u001b[38;5;124mSELECT * FROM data LIMIT 5;\u001b[39m\u001b[38;5;124m\"\u001b[39m)\n\u001b[1;32m      4\u001b[0m     \u001b[38;5;28;01mfor\u001b[39;00m row \u001b[38;5;129;01min\u001b[39;00m result:\n\u001b[1;32m      5\u001b[0m         \u001b[38;5;28mprint\u001b[39m(row)\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/sqlalchemy/engine/base.py:1416\u001b[0m, in \u001b[0;36mConnection.execute\u001b[0;34m(self, statement, parameters, execution_options)\u001b[0m\n\u001b[1;32m   1414\u001b[0m     meth \u001b[38;5;241m=\u001b[39m statement\u001b[38;5;241m.\u001b[39m_execute_on_connection\n\u001b[1;32m   1415\u001b[0m \u001b[38;5;28;01mexcept\u001b[39;00m \u001b[38;5;167;01mAttributeError\u001b[39;00m \u001b[38;5;28;01mas\u001b[39;00m err:\n\u001b[0;32m-> 1416\u001b[0m     \u001b[38;5;28;01mraise\u001b[39;00m exc\u001b[38;5;241m.\u001b[39mObjectNotExecutableError(statement) \u001b[38;5;28;01mfrom\u001b[39;00m \u001b[38;5;21;01merr\u001b[39;00m\n\u001b[1;32m   1417\u001b[0m \u001b[38;5;28;01melse\u001b[39;00m:\n\u001b[1;32m   1418\u001b[0m     \u001b[38;5;28;01mreturn\u001b[39;00m meth(\n\u001b[1;32m   1419\u001b[0m         \u001b[38;5;28mself\u001b[39m,\n\u001b[1;32m   1420\u001b[0m         distilled_parameters,\n\u001b[1;32m   1421\u001b[0m         execution_options \u001b[38;5;129;01mor\u001b[39;00m NO_OPTIONS,\n\u001b[1;32m   1422\u001b[0m     )\n",
      "\u001b[0;31mObjectNotExecutableError\u001b[0m: Not an executable object: 'SELECT * FROM data LIMIT 5;'"
     ]
    }
   ],
   "source": [
    "# Test query to fetch data\n",
    "with engine.connect() as connection:\n",
    "    result = connection.execute(\"SELECT * FROM data LIMIT 5;\")\n",
    "    for row in result:\n",
    "        print(row)\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "43ddb22d-9807-428a-9c20-05be037eb143",
   "metadata": {},
   "outputs": [],
   "source": [
    "from flask import Flask, render_template, jsonify\n",
    "app = Flask(__name__)\n",
    "\n",
    "@app.route('/')\n",
    "def index():\n",
    "    return render_template('index.html')  # Ensure you have an index.html file in your templates directory\n",
    "\n",
    "@app.route('/api/data')\n",
    "def get_data():\n",
    "    # Fetch data from database\n",
    "    with engine.connect() as connection:\n",
    "        result = connection.execute(\"SELECT * FROM data;\")\n",
    "        return jsonify([dict(row) for row in result])\n",
    "\n",
    "if __name__ == '__main__':\n",
    "    app.run(debug=True)\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 14,
   "id": "2182ad08-82f9-4a5e-bd99-c278791bc175",
   "metadata": {},
   "outputs": [
    {
     "ename": "OperationalError",
     "evalue": "(sqlite3.OperationalError) no such table: data\n[SQL: SELECT income_variable FROM data]\n(Background on this error at: https://sqlalche.me/e/20/e3q8)",
     "output_type": "error",
     "traceback": [
      "\u001b[0;31m---------------------------------------------------------------------------\u001b[0m",
      "\u001b[0;31mOperationalError\u001b[0m                          Traceback (most recent call last)",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/sqlalchemy/engine/base.py:1967\u001b[0m, in \u001b[0;36mConnection._exec_single_context\u001b[0;34m(self, dialect, context, statement, parameters)\u001b[0m\n\u001b[1;32m   1966\u001b[0m     \u001b[38;5;28;01mif\u001b[39;00m \u001b[38;5;129;01mnot\u001b[39;00m evt_handled:\n\u001b[0;32m-> 1967\u001b[0m         \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mdialect\u001b[38;5;241m.\u001b[39mdo_execute(\n\u001b[1;32m   1968\u001b[0m             cursor, str_statement, effective_parameters, context\n\u001b[1;32m   1969\u001b[0m         )\n\u001b[1;32m   1971\u001b[0m \u001b[38;5;28;01mif\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_has_events \u001b[38;5;129;01mor\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mengine\u001b[38;5;241m.\u001b[39m_has_events:\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/sqlalchemy/engine/default.py:924\u001b[0m, in \u001b[0;36mDefaultDialect.do_execute\u001b[0;34m(self, cursor, statement, parameters, context)\u001b[0m\n\u001b[1;32m    923\u001b[0m \u001b[38;5;28;01mdef\u001b[39;00m \u001b[38;5;21mdo_execute\u001b[39m(\u001b[38;5;28mself\u001b[39m, cursor, statement, parameters, context\u001b[38;5;241m=\u001b[39m\u001b[38;5;28;01mNone\u001b[39;00m):\n\u001b[0;32m--> 924\u001b[0m     cursor\u001b[38;5;241m.\u001b[39mexecute(statement, parameters)\n",
      "\u001b[0;31mOperationalError\u001b[0m: no such table: data",
      "\nThe above exception was the direct cause of the following exception:\n",
      "\u001b[0;31mOperationalError\u001b[0m                          Traceback (most recent call last)",
      "Cell \u001b[0;32mIn[14], line 8\u001b[0m\n\u001b[1;32m      5\u001b[0m engine \u001b[38;5;241m=\u001b[39m create_engine(\u001b[38;5;124m'\u001b[39m\u001b[38;5;124msqlite:///income_inequality.db\u001b[39m\u001b[38;5;124m'\u001b[39m)\n\u001b[1;32m      7\u001b[0m \u001b[38;5;66;03m# Fetch data\u001b[39;00m\n\u001b[0;32m----> 8\u001b[0m df \u001b[38;5;241m=\u001b[39m pd\u001b[38;5;241m.\u001b[39mread_sql(\u001b[38;5;124m\"\u001b[39m\u001b[38;5;124mSELECT income_variable FROM data\u001b[39m\u001b[38;5;124m\"\u001b[39m, con\u001b[38;5;241m=\u001b[39mengine)\n\u001b[1;32m     10\u001b[0m \u001b[38;5;66;03m# Plot\u001b[39;00m\n\u001b[1;32m     11\u001b[0m plt\u001b[38;5;241m.\u001b[39mhist(df[\u001b[38;5;124m'\u001b[39m\u001b[38;5;124mincome_variable\u001b[39m\u001b[38;5;124m'\u001b[39m], bins\u001b[38;5;241m=\u001b[39m\u001b[38;5;241m50\u001b[39m)\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/pandas/io/sql.py:734\u001b[0m, in \u001b[0;36mread_sql\u001b[0;34m(sql, con, index_col, coerce_float, params, parse_dates, columns, chunksize, dtype_backend, dtype)\u001b[0m\n\u001b[1;32m    724\u001b[0m     \u001b[38;5;28;01mreturn\u001b[39;00m pandas_sql\u001b[38;5;241m.\u001b[39mread_table(\n\u001b[1;32m    725\u001b[0m         sql,\n\u001b[1;32m    726\u001b[0m         index_col\u001b[38;5;241m=\u001b[39mindex_col,\n\u001b[0;32m   (...)\u001b[0m\n\u001b[1;32m    731\u001b[0m         dtype_backend\u001b[38;5;241m=\u001b[39mdtype_backend,\n\u001b[1;32m    732\u001b[0m     )\n\u001b[1;32m    733\u001b[0m \u001b[38;5;28;01melse\u001b[39;00m:\n\u001b[0;32m--> 734\u001b[0m     \u001b[38;5;28;01mreturn\u001b[39;00m pandas_sql\u001b[38;5;241m.\u001b[39mread_query(\n\u001b[1;32m    735\u001b[0m         sql,\n\u001b[1;32m    736\u001b[0m         index_col\u001b[38;5;241m=\u001b[39mindex_col,\n\u001b[1;32m    737\u001b[0m         params\u001b[38;5;241m=\u001b[39mparams,\n\u001b[1;32m    738\u001b[0m         coerce_float\u001b[38;5;241m=\u001b[39mcoerce_float,\n\u001b[1;32m    739\u001b[0m         parse_dates\u001b[38;5;241m=\u001b[39mparse_dates,\n\u001b[1;32m    740\u001b[0m         chunksize\u001b[38;5;241m=\u001b[39mchunksize,\n\u001b[1;32m    741\u001b[0m         dtype_backend\u001b[38;5;241m=\u001b[39mdtype_backend,\n\u001b[1;32m    742\u001b[0m         dtype\u001b[38;5;241m=\u001b[39mdtype,\n\u001b[1;32m    743\u001b[0m     )\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/pandas/io/sql.py:1836\u001b[0m, in \u001b[0;36mSQLDatabase.read_query\u001b[0;34m(self, sql, index_col, coerce_float, parse_dates, params, chunksize, dtype, dtype_backend)\u001b[0m\n\u001b[1;32m   1779\u001b[0m \u001b[38;5;28;01mdef\u001b[39;00m \u001b[38;5;21mread_query\u001b[39m(\n\u001b[1;32m   1780\u001b[0m     \u001b[38;5;28mself\u001b[39m,\n\u001b[1;32m   1781\u001b[0m     sql: \u001b[38;5;28mstr\u001b[39m,\n\u001b[0;32m   (...)\u001b[0m\n\u001b[1;32m   1788\u001b[0m     dtype_backend: DtypeBackend \u001b[38;5;241m|\u001b[39m Literal[\u001b[38;5;124m\"\u001b[39m\u001b[38;5;124mnumpy\u001b[39m\u001b[38;5;124m\"\u001b[39m] \u001b[38;5;241m=\u001b[39m \u001b[38;5;124m\"\u001b[39m\u001b[38;5;124mnumpy\u001b[39m\u001b[38;5;124m\"\u001b[39m,\n\u001b[1;32m   1789\u001b[0m ) \u001b[38;5;241m-\u001b[39m\u001b[38;5;241m>\u001b[39m DataFrame \u001b[38;5;241m|\u001b[39m Iterator[DataFrame]:\n\u001b[1;32m   1790\u001b[0m \u001b[38;5;250m    \u001b[39m\u001b[38;5;124;03m\"\"\"\u001b[39;00m\n\u001b[1;32m   1791\u001b[0m \u001b[38;5;124;03m    Read SQL query into a DataFrame.\u001b[39;00m\n\u001b[1;32m   1792\u001b[0m \n\u001b[0;32m   (...)\u001b[0m\n\u001b[1;32m   1834\u001b[0m \n\u001b[1;32m   1835\u001b[0m \u001b[38;5;124;03m    \"\"\"\u001b[39;00m\n\u001b[0;32m-> 1836\u001b[0m     result \u001b[38;5;241m=\u001b[39m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mexecute(sql, params)\n\u001b[1;32m   1837\u001b[0m     columns \u001b[38;5;241m=\u001b[39m result\u001b[38;5;241m.\u001b[39mkeys()\n\u001b[1;32m   1839\u001b[0m     \u001b[38;5;28;01mif\u001b[39;00m chunksize \u001b[38;5;129;01mis\u001b[39;00m \u001b[38;5;129;01mnot\u001b[39;00m \u001b[38;5;28;01mNone\u001b[39;00m:\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/pandas/io/sql.py:1659\u001b[0m, in \u001b[0;36mSQLDatabase.execute\u001b[0;34m(self, sql, params)\u001b[0m\n\u001b[1;32m   1657\u001b[0m args \u001b[38;5;241m=\u001b[39m [] \u001b[38;5;28;01mif\u001b[39;00m params \u001b[38;5;129;01mis\u001b[39;00m \u001b[38;5;28;01mNone\u001b[39;00m \u001b[38;5;28;01melse\u001b[39;00m [params]\n\u001b[1;32m   1658\u001b[0m \u001b[38;5;28;01mif\u001b[39;00m \u001b[38;5;28misinstance\u001b[39m(sql, \u001b[38;5;28mstr\u001b[39m):\n\u001b[0;32m-> 1659\u001b[0m     \u001b[38;5;28;01mreturn\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mcon\u001b[38;5;241m.\u001b[39mexec_driver_sql(sql, \u001b[38;5;241m*\u001b[39margs)\n\u001b[1;32m   1660\u001b[0m \u001b[38;5;28;01mreturn\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mcon\u001b[38;5;241m.\u001b[39mexecute(sql, \u001b[38;5;241m*\u001b[39margs)\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/sqlalchemy/engine/base.py:1779\u001b[0m, in \u001b[0;36mConnection.exec_driver_sql\u001b[0;34m(self, statement, parameters, execution_options)\u001b[0m\n\u001b[1;32m   1774\u001b[0m execution_options \u001b[38;5;241m=\u001b[39m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_execution_options\u001b[38;5;241m.\u001b[39mmerge_with(\n\u001b[1;32m   1775\u001b[0m     execution_options\n\u001b[1;32m   1776\u001b[0m )\n\u001b[1;32m   1778\u001b[0m dialect \u001b[38;5;241m=\u001b[39m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mdialect\n\u001b[0;32m-> 1779\u001b[0m ret \u001b[38;5;241m=\u001b[39m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_execute_context(\n\u001b[1;32m   1780\u001b[0m     dialect,\n\u001b[1;32m   1781\u001b[0m     dialect\u001b[38;5;241m.\u001b[39mexecution_ctx_cls\u001b[38;5;241m.\u001b[39m_init_statement,\n\u001b[1;32m   1782\u001b[0m     statement,\n\u001b[1;32m   1783\u001b[0m     \u001b[38;5;28;01mNone\u001b[39;00m,\n\u001b[1;32m   1784\u001b[0m     execution_options,\n\u001b[1;32m   1785\u001b[0m     statement,\n\u001b[1;32m   1786\u001b[0m     distilled_parameters,\n\u001b[1;32m   1787\u001b[0m )\n\u001b[1;32m   1789\u001b[0m \u001b[38;5;28;01mreturn\u001b[39;00m ret\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/sqlalchemy/engine/base.py:1846\u001b[0m, in \u001b[0;36mConnection._execute_context\u001b[0;34m(self, dialect, constructor, statement, parameters, execution_options, *args, **kw)\u001b[0m\n\u001b[1;32m   1844\u001b[0m     \u001b[38;5;28;01mreturn\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_exec_insertmany_context(dialect, context)\n\u001b[1;32m   1845\u001b[0m \u001b[38;5;28;01melse\u001b[39;00m:\n\u001b[0;32m-> 1846\u001b[0m     \u001b[38;5;28;01mreturn\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_exec_single_context(\n\u001b[1;32m   1847\u001b[0m         dialect, context, statement, parameters\n\u001b[1;32m   1848\u001b[0m     )\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/sqlalchemy/engine/base.py:1986\u001b[0m, in \u001b[0;36mConnection._exec_single_context\u001b[0;34m(self, dialect, context, statement, parameters)\u001b[0m\n\u001b[1;32m   1983\u001b[0m     result \u001b[38;5;241m=\u001b[39m context\u001b[38;5;241m.\u001b[39m_setup_result_proxy()\n\u001b[1;32m   1985\u001b[0m \u001b[38;5;28;01mexcept\u001b[39;00m \u001b[38;5;167;01mBaseException\u001b[39;00m \u001b[38;5;28;01mas\u001b[39;00m e:\n\u001b[0;32m-> 1986\u001b[0m     \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_handle_dbapi_exception(\n\u001b[1;32m   1987\u001b[0m         e, str_statement, effective_parameters, cursor, context\n\u001b[1;32m   1988\u001b[0m     )\n\u001b[1;32m   1990\u001b[0m \u001b[38;5;28;01mreturn\u001b[39;00m result\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/sqlalchemy/engine/base.py:2353\u001b[0m, in \u001b[0;36mConnection._handle_dbapi_exception\u001b[0;34m(self, e, statement, parameters, cursor, context, is_sub_exec)\u001b[0m\n\u001b[1;32m   2351\u001b[0m \u001b[38;5;28;01melif\u001b[39;00m should_wrap:\n\u001b[1;32m   2352\u001b[0m     \u001b[38;5;28;01massert\u001b[39;00m sqlalchemy_exception \u001b[38;5;129;01mis\u001b[39;00m \u001b[38;5;129;01mnot\u001b[39;00m \u001b[38;5;28;01mNone\u001b[39;00m\n\u001b[0;32m-> 2353\u001b[0m     \u001b[38;5;28;01mraise\u001b[39;00m sqlalchemy_exception\u001b[38;5;241m.\u001b[39mwith_traceback(exc_info[\u001b[38;5;241m2\u001b[39m]) \u001b[38;5;28;01mfrom\u001b[39;00m \u001b[38;5;21;01me\u001b[39;00m\n\u001b[1;32m   2354\u001b[0m \u001b[38;5;28;01melse\u001b[39;00m:\n\u001b[1;32m   2355\u001b[0m     \u001b[38;5;28;01massert\u001b[39;00m exc_info[\u001b[38;5;241m1\u001b[39m] \u001b[38;5;129;01mis\u001b[39;00m \u001b[38;5;129;01mnot\u001b[39;00m \u001b[38;5;28;01mNone\u001b[39;00m\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/sqlalchemy/engine/base.py:1967\u001b[0m, in \u001b[0;36mConnection._exec_single_context\u001b[0;34m(self, dialect, context, statement, parameters)\u001b[0m\n\u001b[1;32m   1965\u001b[0m                 \u001b[38;5;28;01mbreak\u001b[39;00m\n\u001b[1;32m   1966\u001b[0m     \u001b[38;5;28;01mif\u001b[39;00m \u001b[38;5;129;01mnot\u001b[39;00m evt_handled:\n\u001b[0;32m-> 1967\u001b[0m         \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mdialect\u001b[38;5;241m.\u001b[39mdo_execute(\n\u001b[1;32m   1968\u001b[0m             cursor, str_statement, effective_parameters, context\n\u001b[1;32m   1969\u001b[0m         )\n\u001b[1;32m   1971\u001b[0m \u001b[38;5;28;01mif\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39m_has_events \u001b[38;5;129;01mor\u001b[39;00m \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mengine\u001b[38;5;241m.\u001b[39m_has_events:\n\u001b[1;32m   1972\u001b[0m     \u001b[38;5;28mself\u001b[39m\u001b[38;5;241m.\u001b[39mdispatch\u001b[38;5;241m.\u001b[39mafter_cursor_execute(\n\u001b[1;32m   1973\u001b[0m         \u001b[38;5;28mself\u001b[39m,\n\u001b[1;32m   1974\u001b[0m         cursor,\n\u001b[0;32m   (...)\u001b[0m\n\u001b[1;32m   1978\u001b[0m         context\u001b[38;5;241m.\u001b[39mexecutemany,\n\u001b[1;32m   1979\u001b[0m     )\n",
      "File \u001b[0;32m/opt/anaconda3/lib/python3.12/site-packages/sqlalchemy/engine/default.py:924\u001b[0m, in \u001b[0;36mDefaultDialect.do_execute\u001b[0;34m(self, cursor, statement, parameters, context)\u001b[0m\n\u001b[1;32m    923\u001b[0m \u001b[38;5;28;01mdef\u001b[39;00m \u001b[38;5;21mdo_execute\u001b[39m(\u001b[38;5;28mself\u001b[39m, cursor, statement, parameters, context\u001b[38;5;241m=\u001b[39m\u001b[38;5;28;01mNone\u001b[39;00m):\n\u001b[0;32m--> 924\u001b[0m     cursor\u001b[38;5;241m.\u001b[39mexecute(statement, parameters)\n",
      "\u001b[0;31mOperationalError\u001b[0m: (sqlite3.OperationalError) no such table: data\n[SQL: SELECT income_variable FROM data]\n(Background on this error at: https://sqlalche.me/e/20/e3q8)"
     ]
    }
   ],
   "source": [
    "import matplotlib.pyplot as plt\n",
    "import pandas as pd\n",
    "from sqlalchemy import create_engine\n",
    "\n",
    "engine = create_engine('sqlite:///income_inequality.db')\n",
    "\n",
    "# Fetch data\n",
    "df = pd.read_sql(\"SELECT income_variable FROM data\", con=engine)\n",
    "\n",
    "# Plot\n",
    "plt.hist(df['income_variable'], bins=50)\n",
    "plt.title('Income Distribution')\n",
    "plt.xlabel('Income')\n",
    "plt.ylabel('Frequency')\n",
    "plt.grid(True)\n",
    "plt.show()\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "313c9bf3-6a17-40bc-9a88-071ee7187807",
   "metadata": {},
   "outputs": [],
   "source": [
    "from flask import Response\n",
    "import io\n",
    "\n",
    "@app.route('/plot/income_distribution.png')\n",
    "def income_distribution_plot():\n",
    "    fig, ax = plt.subplots()\n",
    "    df = pd.read_sql(\"SELECT income_variable FROM data\", con=engine)\n",
    "    ax.hist(df['income_variable'], bins=50)\n",
    "    ax.set_title('Income Distribution')\n",
    "    ax.set_xlabel('Income')\n",
    "    ax.set_ylabel('Frequency')\n",
    "    ax.grid(True)\n",
    "    output = io.BytesIO()\n",
    "    fig.savefig(output, format='png')\n",
    "    output.seek(0)\n",
    "    return Response(output.getvalue(), mimetype='image/png')\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "f8ef4209-3961-41ef-b4c0-c180df8712b4",
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3 (ipykernel)",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.12.4"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
