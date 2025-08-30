package com.food.service;

import com.food.model.Category;
import com.food.model.Food;
import com.food.model.Restaurant;
import com.food.repository.FoodRepository;
import com.food.repository.UserRepository;
import com.food.request.CreateFoodRequest;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class FoodServiceImpl implements FoodService{

    @Autowired
    private FoodRepository foodRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant) {
        Food food = new Food();
        food.setName(req.getName());
        food.setDescription(req.getDescription());
        food.setFoodCategory(category);
        food.setRestaurant(restaurant);
        food.setImages(req.getImages());
        food.setPrice(req.getPrice());
        food.setIngrediants(req.getIngrediants());
        food.setSeasonal(req.isSeasional());
        food.setVegetarian(req.isVegetarian());

        Food savedFood = foodRepository.save(food);
        restaurant.getFoods().add(savedFood);

        return savedFood;
    }

    @Override
    public void deleteFood(Long foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setRestaurant(null);

        foodRepository.delete(food);

    }

    @Override
    public List<Food> getRestaurantFood(Long restaurantId, boolean isVegetarian, boolean isNonVeg, boolean isSeasonal, String foodCategory) {
        List<Food> foods = foodRepository.findByRestaurantId(restaurantId);

        if(isVegetarian){
             foods = filterByVegetarian(foods,isVegetarian);
        }

        if(isNonVeg){
            foods = filterByNonVeg(foods,isNonVeg);
        }
        
        if(isSeasonal){
            foods = filterBySeasonal(foods,isSeasonal);
        }

        if(foodCategory!=null && !foodCategory.isEmpty()){
            foods = filterByCategory(foods,foodCategory);
        }

        return foods;
    }

    private List<Food> filterByCategory(List<Food> foods, String foodCategory) {
        return foods.stream().filter(food -> food.getFoodCategory().getName().equals(foodCategory))
                .collect(Collectors.toList());
    }

    private List<Food> filterBySeasonal(List<Food> foods, boolean isSeasonal) {
        return foods.stream().filter(food -> food.isSeasonal() == isSeasonal)
                .collect(Collectors.toList());
    }

    private List<Food> filterByNonVeg(List<Food> foods, boolean isNonVeg) {
        return foods.stream().filter(food -> !food.isVegetarian()).collect(Collectors.toList());
    }

    private List<Food> filterByVegetarian(List<Food> foods, boolean isVegetarian) {
        return foods.stream().filter(food -> food.isVegetarian() == isVegetarian)
                .collect(Collectors.toList());
    }

    @Override
    public List<Food> searchFood(String keyword) {
        return foodRepository.searchFood(keyword);
    }

    @Override
    public Food findFoodById(Long foodId) throws Exception {

        Optional<Food> food = foodRepository.findById(foodId);

        if(food.isEmpty()){
            throw new Exception("Food not exist");
        }

        return food.get();
    }

    @Override
    public Food updateAvailability(Long foodId) throws Exception {
        Food food = findFoodById(foodId);

        food.setAvailable(!food.isAvailable());

        foodRepository.save(food);

        return food;
    }
}
