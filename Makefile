.PHONY: index.js
index.js:
	grep -P '\t' README.md | sed -e 's/\t//' > index.js
