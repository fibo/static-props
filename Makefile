.PHONY: static-props.js
static-props.js:
	grep -P '\t' README.md | sed -e 's/\t//' > static-props.js
