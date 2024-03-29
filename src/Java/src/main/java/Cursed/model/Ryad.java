package Cursed.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Cursed.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Ряд
 */
@Entity(name = "IISCursedРяд")
@Table(schema = "public", name = "Ряд")
public class Ryad {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерРяда")
    private Integer номерряда;


    public Ryad() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерРяда() {
      return номерряда;
    }

    public void setНомерРяда(Integer номерряда) {
      this.номерряда = номерряда;
    }


}