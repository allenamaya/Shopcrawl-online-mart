# Online shopping community

## Problem statement

One of the major issues facing the rapidly growing online shopping community is lack of a tool that is able to automatically compute the marginal benefit(MB) and the cost benefit (CB) analysis of purchasing product A from e-shop X; product B from e-shop Y, or product A and B all from e-shop X or e-shop Y. This owes to the fact that both shops may have the same product, but the MB and CB are highly subjective to factors such as shipping costs which may differ from e-shop X to Y, consumer ratings for each products in the two stores, quality, price among others.

## Solution

Given a search query, say “Samsung A51”, Shopcrawl will ‘crawl’ the given e-commerce, by utilizing given APIs to extract data from these sites and create a temporary structured index of the data given that specific query. It will then apply the MB and CB formulas on this retrieved data and then rank these products based on this default criteria.

## MVP Features

Query a product, index data from at least 4 e-commerce sites (Amazon, eBay, Shopify, Alibaba), rank search results by price (beta).
Allow client to filter the data according to their preference (i.e alter the rank)
User may not be logged in/have an account to use the service.
For registered accounts, record their search history.
