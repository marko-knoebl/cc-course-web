# Exercise notes for "The Employees"

## Modified task: server-side routing

The task describes a route: _/employees/superheroes_

This is not an ideal route when it comes to REST - a better route would be: _/employees?position=Superhero_ - it is more flexible and closer to the standard REST format

---

Instead of doing this task, implement an alternative route: _/employees/statistics_

The result could look like this (if there are 100 employees):

```json
{
  "total": 100,
  "byLevel": {
    "Junior": 20,
    "Medior": 20,
    "Senior": 20,
    "Expert": 30,
    "Godlike": 10
  }
}
```

Note: This route definition has to go _above_ `app.use("/api/employees/:id" ...`

## Task: Client-side routing

no changes

## Extra task: modified client-side routing

so far you may have these routes:

- "/" (basic **layout**)
  - "/"
  - "/create"
  - "/update/:id"
  - "/table-test"
  - "/form-test"
  - "/hello"

update the code to this _nested_ route structure:

- "/" (basic **layout**)
  - "" (start page / welcome page / basic navigation)
  - "employees/" (**layout** for employees views)
    - "" (list of employees)
    - "create" (form for creating an employee)
    - "update/:id" (form for updating an employee)
  - "table-test"
  - "form-test"
  - "hello"

**How?**

Instead of a single _Layout_ component, you can have a _MainLayout_ and an _EmployeeLayout_

Every **layout** page needs an `<Outlet />` element

**Why?**

In the future, you will have routes for different entities, e.g. _/employees/create_, _/equipment/create_, ...

## Modified task: client-side routing evolved

You don't need to create _/employees/superheroes_

Instead, create a new page under _/employees/statistics_ which displays the statistics from the API
