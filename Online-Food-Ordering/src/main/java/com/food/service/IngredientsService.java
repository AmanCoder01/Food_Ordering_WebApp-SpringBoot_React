package com.food.service;

import com.food.model.IngredientCategory;
import com.food.model.IngredientsItem;

import java.util.List;

public interface IngredientsService {

    public IngredientCategory createIngredientsCategory(String name,Long restaurantId)throws Exception;

    public IngredientCategory findIngredientsCategoryById(Long id)throws Exception;

    public List<IngredientCategory> findIngredientsCategoryByRestaurantId(Long restaurantId)throws Exception;

    public IngredientsItem createIngredientsItem(Long restaurantId,String ingredientName,Long ingredientCategoryId) throws Exception;

    public List<IngredientsItem> findRestaurantIngredients(Long restaurantId);

    public IngredientsItem updateStock(Long id)throws Exception;
}
