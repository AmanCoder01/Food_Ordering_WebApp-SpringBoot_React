package com.food.service;

import com.food.model.CartItem;
import com.food.request.AddCartItemRequest;

public interface CartService {

    public CartItem addItemToCart(AddCartItemRequest req, String jwt)throws Exception;

    public CartItem updateCartItemQuantity(AddCartItemRequest req, String jwt)throws Exception;

    public CartItem addItemToCart(AddCartItemRequest req, String jwt)throws Exception;
}
