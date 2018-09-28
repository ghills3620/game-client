PATCH	/games/:id	games#update

curl "https://tic-tac-toe-wdi.herokuapp.com/games/" \
  --include \
    --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": 0,
        "value": "x"
      },
      "over": false
    }
  }'
echo
