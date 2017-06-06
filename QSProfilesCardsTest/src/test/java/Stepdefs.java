/**
 * Created by MiriamPereira on 01-06-2017.
 */
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static junit.framework.TestCase.assertEquals;
import static org.hamcrest.core.Is.is;
import static org.hamcrest.core.IsNot.not;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertThat;

public class Stepdefs {
    private static WebDriver driver;

    static {
        if(driver == null)
            driver = new HtmlUnitDriver();
    }
    private String baseUrl = "file:///D:/DOCUMENTOS/QSoftware/QSProfileCards/Site/index.html";

    @Before
    public void setUp() {
        driver = new HtmlUnitDriver();
    }
    @After
    public void tearDown() {
        driver.close();
    }

    @Given("^that I'm in the main page$")
    public void thatIMInTheMainPage() throws Throwable {
        driver.get(baseUrl);
        assertEquals("Profile Cards", driver.getTitle());
    }

    @When("^the page is loaded and exists \"([^\"]*)\"$")
    public void thePageIsLoadedAndExists(String member) throws Throwable {
        driver.get(baseUrl);
        if(member.equals("Pedro Jorge"))
            assertEquals(member, driver.findElement(By.xpath("//div[@id='speakers']/div/h3")).getText());
        if(member.equals("Miriam Pereira"))
            assertEquals(member, driver.findElement(By.xpath("//div[@id='speakers']/div[2]/h3")).getText());
        if(member.equals("Vítor Dias"))
            assertEquals(member, driver.findElement(By.xpath("//div[@id='speakers']/div[3]/h3")).getText());
    }

    @Then("^the application shows a list of team \"([^\"]*)\" with your main information \"([^\"]*)\"$")
    public void theApplicationShowsAListOfTeamWithYourMain(String member, String info) throws Throwable {
        driver.get(baseUrl);
        if(member.equals("Pedro Jorge")) {
            assertEquals(info, driver.findElement(By.xpath("//div[@id='speakers']/div/p")).getText());
        }
        if(member.equals("Miriam Pereira")) {
            assertEquals(info, driver.findElement(By.xpath("//div[@id='speakers']/div[2]/p")).getText());
        }
        if(member.equals("Vítor Dias")) {
            assertEquals(info, driver.findElement(By.xpath("//div[@id='speakers']/div[3]/p")).getText());
        }
    }


    @And("^doesn't exists \"([^\"]*)\"$")
    public void doesnTExists(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^the page is loaded$")
    public void thePageIsLoaded() throws Throwable {
        driver.navigate().refresh();
    }

    @Then("^the application shows a default message: \"([^\"]*)\"$")
    public void theApplicationShowsADefaultMessage(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^a \"([^\"]*)\" exists$")
    public void aExists(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^that \"([^\"]*)\" appears with his available main information \"([^\"]*)\"$")
    public void thatAppearsWithHisAvailableMainInformation(String arg0, String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^a member does not exist$")
    public void aMemberDoesNotExist() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^that member will not appear$")
    public void thatMemberWillNotAppear() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^the \"([^\"]*)\" of the team has a \"([^\"]*)\"$")
    public void theOfTheTeamHasA(String member, String name) throws Throwable {
        if(member.equals("Pedro Jorge")) {
            assertEquals(name, driver.findElement(By.xpath("//div[@id='speakers']/div/h3")).getText());
        }
        if(member.equals("Miriam Pereira")) {
            assertEquals(name, driver.findElement(By.xpath("//div[@id='speakers']/div[2]/h3")).getText());
        }
        if(member.equals("Vítor Dias")) {
            assertEquals(name, driver.findElement(By.xpath("//div[@id='speakers']/div[3]/h3")).getText());
        }
    }

    @Then("^the application shows <member>'s name <name>$")
    public void theApplicationShowsMemberSNameName() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
