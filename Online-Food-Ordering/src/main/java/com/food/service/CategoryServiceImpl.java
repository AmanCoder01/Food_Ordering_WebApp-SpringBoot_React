package com.food.service;

import com.food.model.Category;
import com.food.model.Restaurant;
import com.food.repository.CategoryRepository;
import com.food.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public Category createCategory(String name, Long userId) throws Exception {

        Restaurant restaurant = restaurantService.findRestaurantByUserId(userId);

        Category category = new Category();
        category.setName(name);
        category.setRestaurant(restaurant);

        return categoryRepository.save(category);
    }

    @Override
    public List<Category> findCategoryByResId(Long userId) throws Exception {

        Restaurant restaurant = restaurantService.findRestaurantByUserId(userId);

        return categoryRepository.findByRestaurantId(restaurant.getId());
    }

    @Override
    public Category findCategoryById(Long catId) throws Exception {
        Optional<Category> category = categoryRepository.findById(catId);

        if(category.isEmpty()){
            throw  new Exception("Category is not found");
        }

        return category.get();
    }
}
