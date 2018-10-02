PATCH	/games/:id	games#update

curl "https://tic-tac-toe-wdi.herokuapp.com/games/:id" \
  --include \
    --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Authorization: Token token=${TOKEN}" \

echo
