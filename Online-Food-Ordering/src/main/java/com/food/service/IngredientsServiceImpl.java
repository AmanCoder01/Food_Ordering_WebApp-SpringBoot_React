package com.food.service;

import com.food.model.IngredientCategory;
import com.food.model.IngredientsItem;
import com.food.model.Restaurant;
import com.food.repository.IngredientsCategoryRepository;
import com.food.repository.IngredientsItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientsServiceImpl implements IngredientsService{

    @Autowired
    private IngredientsItemRepository ingredientsItemRepository;

    @Autowired
    private IngredientsCategoryRepository ingredientsCategoryRepository;

    @Autowired
    private RestaurantService restaurantService;

    @Override
    public IngredientCategory createIngredientsCategory(String name, Long restaurantId) throws Exception {

        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);

        IngredientCategory ingredientCategory = new IngredientCategory();
        ingredientCategory.setName(name);
        ingredientCategory.setRestaurant(restaurant);

        return ingredientsCategoryRepository.save(ingredientCategory);
    }

    @Override
    public IngredientCategory findIngredientsCategoryById(Long id) throws Exception {

        Optional<IngredientCategory> category = ingredientsCategoryRepository.findById(id);

        if(category.isEmpty()){
            throw new Exception("IngredientCategory not found!");
        }

        return category.get();
    }

    @Override
    public List<IngredientCategory> findIngredientsCategoryByRestaurantId(Long restaurantId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        if(restaurant==null){
            throw new Exception("Restaurant not found");
        }

        return ingredientsCategoryRepository.findByRestaurantId(restaurantId);
    }

    @Override
    public IngredientsItem createIngredientsItem(Long restaurantId, String ingredientName, Long ingredientCategoryId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);

        IngredientCategory category = findIngredientsCategoryById(ingredientCategoryId);

        IngredientsItem ingredientsItem = new IngredientsItem();
        ingredientsItem.setName(ingredientName);
        ingredientsItem.setRestaurant(restaurant);
        ingredientsItem.setCategory(category);

        IngredientsItem savedIng = ingredientsItemRepository.save(ingredientsItem);
        category.getIngredients().add(savedIng);

        return savedIng;
    }

    @Override
    public List<IngredientsItem> findRestaurantIngredients(Long restaurantId) {

        return ingredientsItemRepository.findByRestaurantId(restaurantId);
    }

    @Override
    public IngredientsItem updateStock(Long id) throws Exception {
        Optional<IngredientsItem> itemOptional = ingredientsItemRepository.findById(id);

        if(itemOptional.isEmpty()){
            throw new Exception("Ingredient not found!");
        }

        IngredientsItem ingredientsItem = itemOptional.get();
        ingredientsItem.setInStock(!ingredientsItem.isInStock());

        return ingredientsItemRepository.save(ingredientsItem);
    }
}
