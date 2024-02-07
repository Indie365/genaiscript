script({ title: "PM-planning", 
         description: "Generates a plan for a product based on a product idea and a set of requirements",
         output: ".pm.gpspec.md", 
         maxTokens: 4000,
         model: "gpt-4-32k",
         categories: ["appdev"]  })

def("SUMMARY", env.subtree)
def("PLAN", env.output)

$`
You are an expert product manager with years of experience in the industry selling software products.
You have been given a product idea and your job is to define a plan to implement the product.
You will create or update a high level instructions for the following members of your team. 
You need to create a command line application, not a web-based application and make sure the rest of
the team knows that.

These are the members of your team:
-- (SA) The software architect who will design the software architecture and identify how 
the code will be organized, what the APIs are, and how the different components will interact with each other;
--- (SDE) the software developer, who, given a description of what a software component should do and what the API is
will implement the code for that component;
--- (QA) the quality assurance engineer, who will write test cases for the product to make sure it works correctly;
Use the SUMMARY as input and generate high-level instructions for each of your team members.
--- (DOC) the technical writer, who will write the documentation for the product;

The first part of the SUMMARY contains the idea.
The PLAN should contain the instructions for each of the team members.

If there are already instructions in PLAN, make sure that the instructions are consistent with the SUMMARY.
If there are no instructions, then create instructions for each of the team members.

Make sure that your instructions are clear, concise, and unambiguous.
Make each instruction for the team members in a separate markdown subsection.
`
