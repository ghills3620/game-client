PATCH	/games/:id	games#update

curl "https://tic-tac-toe-wdi.herokuapp.com/games/:id" \
  --include \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE \

echo
